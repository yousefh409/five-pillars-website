import React, { Component } from "react";
import "./Block.css";
import EmptyGrave from "./EmptyGrave";
import Grave from "./Grave";
import Walkway from "./Walkway";
import axios from 'axios'; // Import Axios

const { convertCSVToArray } = require('convert-csv-to-array');
const converter = require('convert-csv-to-array');

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            width: 0,
            height: 0,
            isLoaded: false

        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        if (!this.state.isLoaded) {
            this.showFile(this.props.fileSource)
            this.setState({isLoaded: true})
        }
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

      parseCSV = (csvText) => {
        const rows = csvText.split(/\r?\n/);        // Use a regular expression to split the CSV text into rows while handling '\r'
        const headers = rows[0].split(',');        // Extract headers (assumes the first row is the header row)
        const data = [];        // Initialize an array to store the parsed data
        for (let i = 0; i < rows.length; i++) {
            const rowData = rows[i].split(',');          // Use the regular expression to split the row while handling '\r'
            var rowObject = [];
            for (let j = 0; j < headers.length; j++) {
                rowObject = [...rowObject, rowData[j]];
            }
            data.push(rowObject);
        }
        return data;
    }

    showFile = async (file) => {
        this.props.setIsLoading(this.props.sectionID, true)
        var csv = []
        if (this.props.isOnline) {
            axios.get(file)    // Use Axios to fetch the CSV data
            .then((response) => {
                const parsedCsvData = this.parseCSV(response.data);        // Parse the CSV data into an array of objects
                csv = parsedCsvData;
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
                this.props.setIsLoading(this.props.sectionID, false)
            })
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
            });
        } else {
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
                    this.props.setIsLoading(this.props.sectionID, false)
                });
        }
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