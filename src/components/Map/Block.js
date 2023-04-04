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
            data: []
        };
        this.showFile(this.props.filename)
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
                    {this.state.data.length == 0? 
                        (<p>Loading</p>): 
                        (
                            <div>
                                {this.state.data.map((option, index) => {
                                    return <div className="blockRow"> 
                                        {option.map((option, index) => {
                                            var trimmed = option.trim()
                                            console.log(trimmed)
                                            return <div> 
                                                {(trimmed === "Empty" || trimmed === "None")? 
                                                    <EmptyGrave />: 
                                                    (trimmed === "WALK WAY"?
                                                        <Walkway />: 
                                                        <Grave sectionID={this.props.sectionID} data={trimmed}/>)}
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