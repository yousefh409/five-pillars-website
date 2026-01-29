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
        // Add names to the search list (skip walkways)
        const { sectionData, addToNamesList } = this.props;
        if (sectionData && sectionData.length > 0) {
            for (const record of sectionData) {
                if (record.name !== 'WALK WAY') {
                    const id = record.location;
                    const name = record.name;
                    const dateOfDeath = record.date_of_death || 'None';
                    addToNamesList(id, name, dateOfDeath);
                }
            }
        }
    }

    // Convert flat data into 2D grid format with walkway support
    getRowData() {
        const { sectionData, sectionID } = this.props;
        if (!sectionData || sectionData.length === 0) return [];

        // Separate graves and walkway marker
        const graves = [];
        let walkwaySplitPoint = null;
        
        for (const record of sectionData) {
            if (record.location.includes('_WALKWAY')) {
                // date_of_death contains the split point (last grave before walkway)
                walkwaySplitPoint = parseInt(record.date_of_death, 10);
            } else {
                graves.push(record);
            }
        }

        // Sort graves by plot number
        graves.sort((a, b) => {
            const numA = parseInt(a.location.replace(sectionID, ''), 10);
            const numB = parseInt(b.location.replace(sectionID, ''), 10);
            return numA - numB;
        });

        // If there's a walkway, split into 3 rows: before, walkway, after
        if (walkwaySplitPoint !== null) {
            const beforeWalkway = [];
            const afterWalkway = [];
            
            for (const grave of graves) {
                const plotNum = parseInt(grave.location.replace(sectionID, ''), 10);
                if (plotNum <= walkwaySplitPoint) {
                    beforeWalkway.push(grave);
                } else {
                    afterWalkway.push(grave);
                }
            }
            
            // Determine the number of columns (max of before and after counts)
            const numCols = Math.max(beforeWalkway.length, afterWalkway.length);
            
            // Build the grid
            const grid = [];
            
            // Row 0: graves before walkway
            const row0 = beforeWalkway.map(record => {
                const graveNum = record.location.replace(sectionID, '').padStart(2, '0');
                return `${graveNum} ${record.name} ${record.date_of_death || 'None'}`;
            });
            // Pad with None if needed
            while (row0.length < numCols) {
                row0.push('None');
            }
            grid.push(row0);
            
            // Row 1: walkway
            const walkwayRow = Array(numCols).fill('WALK WAY');
            grid.push(walkwayRow);
            
            // Row 2: graves after walkway
            const row2 = afterWalkway.map(record => {
                const graveNum = record.location.replace(sectionID, '').padStart(2, '0');
                return `${graveNum} ${record.name} ${record.date_of_death || 'None'}`;
            });
            // Pad with None if needed
            while (row2.length < numCols) {
                row2.push('None');
            }
            grid.push(row2);
            
            return grid;
        }
        
        // No walkway - single row
        const row = graves.map(record => {
            const graveNum = record.location.replace(sectionID, '').padStart(2, '0');
            return `${graveNum} ${record.name} ${record.date_of_death || 'None'}`;
        });
        
        return [row];
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
