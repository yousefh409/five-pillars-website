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
        this.showFile(this.props.blockFile)
    }

    showFile = async (file) => {
        fetch("/data/Five Pillars - Left Side - BLOCK A.csv")
            .then((response) => response.text())
            .then((textContent) => {
                const csv = convertCSVToArray(textContent, {
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
                                            return <div> 
                                                {trimmed === "None"? 
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