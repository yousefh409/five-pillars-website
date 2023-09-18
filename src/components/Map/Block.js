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
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        this.showFile(this.props.filename)

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
                for (const row of csv) {
                    for (const grave of row) {
                        var trimmed = grave.trim()
                        if (!(trimmed === "Empty" || trimmed === "None" || trimmed === "WALK WAY")) {
                            var id = this.props.sectionID + trimmed.split(' ')[0];
                            var dateOfDeath = trimmed.split(' ').at(-1)
                            var name = trimmed.split(' ').slice(1, -1).join(' ')
                            this.props.addToNamesList(id, name, dateOfDeath)
                        }
                    }
                }
            });
    }

    render = () => {
        return (
            <div className="blockWrapper">
                <p className="blockTitle">Block {this.props.sectionID[0]}</p>
                <div>
                    {(this.state.width < 7000 && this.props.selectedSection != this.props.sectionID) || this.state.data.length == 0? 
                        ((this.props.selectedId.slice(0, this.props.sectionID.length) === this.props.sectionID)?  <div className="blockBlankSelected"> Tap to see exact location</div>: <div className="blockBlank"></div>): 
                        (<div>
                                {this.state.data.map((option1, index1) => {
                                    return <div className="blockRow"> 
                                        {option1.map((option2, index2) => {
                                            var trimmed = option2.trim()
                                            return <div> 
                                                {(trimmed === "Empty" || trimmed === "None")? 
                                                    <EmptyGrave />: 
                                                    (trimmed === "WALK WAY"?
                                                        <Walkway />: 
                                                        <Grave sectionID={this.props.sectionID} data={trimmed} selectedId={this.props.selectedId}/>)}
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