import React, { Component } from "react";
import "./Block.css";
import EmptyGrave from "./EmptyGrave";
import Grave from "./Grave";
import Walkway from "./Walkway";

const { convertCSVToArray } = require('convert-csv-to-array');
const converter = require('convert-csv-to-array');

class Block extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            width: 0,
            height: 0
        };
        this.showFile(this.props.filename)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    showFile = async (file) => {
        fetch("/data/" + file)
            .then((response) => response.text())
            .then((textContent) => {
                // Note: We add a "\n" here since the "convert-csv-to-array" package requires that
                //       all CSV lines end in a newline character (which google sheet downloaded CSVs do not have)
                const csv = convertCSVToArray(textContent + "\n", {
                    type: 'array',
                    separator: ',',
                  });
                this.setState({data: csv})
            });
    }

    render = () => {
        return (
            <div className="blockWrapper">
                <p className="blockTitle">Block {this.props.sectionID}</p>
                <div>
                    {(this.state.width < 7000 && this.props.selectedSection != this.props.sectionID) || this.state.data.length == 0? 
                        ((this.props.selectedId.slice(0, this.props.sectionID.length) === this.props.sectionID)?  <div className="blockBlankSelected"> Tap to see exact location</div>: <div className="blockBlank"></div>): 
                        (<div>
                                {this.state.data.map((option, index) => {
                                    return <div className="blockRow"> 
                                        {option.map((option, index) => {
                                            var trimmed = option.trim()
                                            return <div> 
                                                {(trimmed === "Empty" || trimmed === "None")? 
                                                    <EmptyGrave />: 
                                                    (trimmed === "WALK WAY"?
                                                        <Walkway />: 
                                                        <Grave sectionID={this.props.sectionID} data={trimmed} addToNamesList={this.props.addToNamesList} selectedId={this.props.selectedId}/>)}
                                            </div>
                                        })}
                                    </div>
                                })}
                            </div>
                        )
                    }
                </div>
            </div>
        )
    };
};

export default Block;