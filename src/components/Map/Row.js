import React, { Component } from "react";
import "./Block.css";
import EmptyGrave from "./EmptyGrave";
import Grave from "./Grave";
import Walkway from "./Walkway";

const { convertCSVToArray } = require('convert-csv-to-array');
const converter = require('convert-csv-to-array');

class Row extends Component {
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
                <p className="blockTitle">Row {this.props.sectionID}</p>
                <div>
                    {(this.state.width < 7000 && this.props.selectedSection != this.props.sectionID) || this.state.data.length == 0? 
                        ((this.props.selectedId.slice(0, this.props.sectionID.length) === this.props.sectionID)?  <div className="rowBlankSelected"> Tap to see exact location</div>: <div className="rowBlank"></div>): 
                        (
                            <div>
                                {this.state.data.map((option, index) => {
                                    return <div className="blockRow"> 
                                        {option.map((option, index) => {
                                            console.log(option)
                                            console.log(typeof(option))
                                            var trimmed = option.toString().trim()
                                            return <div> 
                                                {trimmed === "None"? 
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

export default Row;