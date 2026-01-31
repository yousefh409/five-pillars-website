import React, { Component } from "react";
import "./Block.css";
import EmptyGrave from "./EmptyGrave";
import Grave from "./Grave";
import Walkway from "./Walkway";
import axios from 'axios';

const { convertCSVToArray } = require('convert-csv-to-array');
const converter = require('convert-csv-to-array');

// Cache configuration
const CACHE_PREFIX = 'fivePillars_block_';
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

class Block extends Component {
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
        // console.log(this.props.sectionID, "call func")

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

    getCacheKey = () => CACHE_PREFIX + this.props.sectionID;

    loadFromCache = () => {
        try {
            const cached = localStorage.getItem(this.getCacheKey());
            if (!cached) return null;
            const { data, timestamp } = JSON.parse(cached);
            // Return cached data if it exists (we'll refresh in background regardless)
            return data || null;
        } catch (error) {
            return null;
        }
    }

    saveToCache = (data) => {
        try {
            localStorage.setItem(this.getCacheKey(), JSON.stringify({
                data,
                timestamp: Date.now()
            }));
        } catch (error) {
            // Silently fail if localStorage is full
        }
    }

    processData = (csv) => {
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
    }

    showFile = async (file) => {
        // Try to load from cache first for instant display
        const cachedData = this.loadFromCache();
        if (cachedData && cachedData.length > 0) {
            // Show cached data immediately
            this.setState({ data: cachedData });
            this.processData(cachedData);
            this.props.setIsLoading(this.props.sectionID, false);
            // Fetch fresh data in background (don't await)
            this.fetchFreshData(file, true);
        } else {
            // No cache - show loading and fetch
            this.props.setIsLoading(this.props.sectionID, true);
            this.fetchFreshData(file, false);
        }
    }

    fetchFreshData = (file, isBackgroundRefresh) => {
        if (this.props.isOnline) {
            axios.get(file)
            .then((response) => {
                const csv = this.parseCSV(response.data);
                this.saveToCache(csv);
                // Only update UI if data changed or not a background refresh
                if (!isBackgroundRefresh || JSON.stringify(csv) !== JSON.stringify(this.state.data)) {
                    this.setState({ data: csv });
                    if (!isBackgroundRefresh) {
                        this.processData(csv);
                    }
                }
                if (!isBackgroundRefresh) {
                    this.props.setIsLoading(this.props.sectionID, false);
                }
            })
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
                if (!isBackgroundRefresh) {
                    this.props.setIsLoading(this.props.sectionID, false);
                }
            });
        } else {
            fetch("/data/" + file)
                .then((response) => response.text())
                .then((textContent) => {
                    const csv = convertCSVToArray(textContent + "\n", {
                        type: 'array',
                        separator: ',',
                    });
                    this.saveToCache(csv);
                    if (!isBackgroundRefresh || JSON.stringify(csv) !== JSON.stringify(this.state.data)) {
                        this.setState({ data: csv });
                        if (!isBackgroundRefresh) {
                            this.processData(csv);
                        }
                    }
                    if (!isBackgroundRefresh) {
                        this.props.setIsLoading(this.props.sectionID, false);
                    }
                });
        }
    }


    render = () => {
        return (
            <div className="blockWrapper">
                <p className="blockTitle">Block {this.props.sectionID[0]}</p>
                <div>
                    {(this.state.width < 7000 && this.props.selectedSection != this.props.sectionID) || this.state.data.length == 0? 
                        ((this.props.selectedId.slice(0, this.props.sectionID.length) === this.props.sectionID)?  
                            <div className={this.props.isSmallBlock? "smallBlockBlankSelected": "blockBlankSelected"}> Tap to see exact location</div>: 
                            <div className={this.props.isSmallBlock? "smallBlockBlank": "blockBlank"}></div>): 
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