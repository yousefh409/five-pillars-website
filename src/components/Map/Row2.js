import React, { Component } from "react";
import "./Block.css";
import EmptyGrave from "./EmptyGrave";
import Grave from "./Grave";
import Walkway from "./Walkway";

class Row2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        this.processData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.sectionData !== this.props.sectionData) {
            this.processData();
        }
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    processData() {
        // Add names to the search list
        const { sectionData, sectionID, addToNamesList } = this.props;
        if (sectionData && sectionData.length > 0) {
            for (const record of sectionData) {
                const id = record.location;
                const name = record.name;
                const dateOfDeath = record.date_of_death || 'None';
                addToNamesList(id, name, dateOfDeath);
            }
        }
    }

    // Convert flat data into single row format for display
    getRowData() {
        const { sectionData, sectionID } = this.props;
        if (!sectionData || sectionData.length === 0) return [];

        // Sort by grave number
        const sorted = [...sectionData].sort((a, b) => {
            const numA = parseInt(a.location.replace(sectionID, ''), 10);
            const numB = parseInt(b.location.replace(sectionID, ''), 10);
            return numA - numB;
        });

        // Rows display as a single horizontal row
        const row = sorted.map(record => {
            const graveNum = record.location.replace(sectionID, '').padStart(2, '0');
            return `${graveNum} ${record.name} ${record.date_of_death || 'None'}`;
        });
        
        return [row]; // Return as 2D array with single row for consistent rendering
    }

    render = () => {
        const rowData = this.getRowData();
        
        return (
            <div className="blockWrapper">
                <p className="blockTitle">{this.props.displayTitle || `Row ${this.props.sectionID}`}</p>
                <div>
                    {(this.state.width < 7000 && this.props.selectedSection !== this.props.sectionID) || rowData.length === 0? 
                        ((this.props.selectedId.slice(0, this.props.sectionID.length) === this.props.sectionID)?  
                            <div className="rowBlankSelected"> Tap to see exact location</div>: 
                            <div className="rowBlank"></div>): 
                        (
                            <div>
                                {rowData.map((row, index1) => {
                                    return <div className="blockRow" key={index1}> 
                                        {row.map((cell, index2) => {
                                            var trimmed = cell.toString().trim();
                                            return <div key={index2}> 
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

export default Row2;
