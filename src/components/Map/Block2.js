import React, { Component } from "react";
import "./Block.css";
import EmptyGrave from "./EmptyGrave";
import Grave from "./Grave";
import Walkway from "./Walkway";

class Block2 extends Component {
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

    // Convert flat data into 2D grid format using row_index and col_index
    getGridData() {
        const { sectionData, sectionID } = this.props;
        if (!sectionData || sectionData.length === 0) return [];

        // Group by row_index
        const rowsMap = {};
        let maxCol = 0;
        
        for (const record of sectionData) {
            const rowIdx = record.row_index;
            const colIdx = record.col_index;
            
            if (!rowsMap[rowIdx]) {
                rowsMap[rowIdx] = {};
            }
            rowsMap[rowIdx][colIdx] = record;
            maxCol = Math.max(maxCol, colIdx);
        }
        
        // Convert to 2D array
        const grid = [];
        const rowIndices = Object.keys(rowsMap).map(Number).sort((a, b) => a - b);
        
        for (const rowIdx of rowIndices) {
            const row = [];
            for (let colIdx = 0; colIdx <= maxCol; colIdx++) {
                const record = rowsMap[rowIdx][colIdx];
                if (record) {
                    if (record.name === 'WALK WAY') {
                        row.push('WALK WAY');
                    } else {
                        // Extract plot number from location (e.g., "AS81" -> "81")
                        const plotNum = record.location.replace(sectionID, '').padStart(2, '0');
                        row.push(`${plotNum} ${record.name} ${record.date_of_death || 'None'}`);
                    }
                } else {
                    row.push('Empty');
                }
            }
            grid.push(row);
        }
        
        return grid;
    }

    render = () => {
        const gridData = this.getGridData();
        
        return (
            <div className="blockWrapper">
                <p className="blockTitle">Block {this.props.sectionID[0]}</p>
                <div>
                    {(this.state.width < 7000 && this.props.selectedSection !== this.props.sectionID) || gridData.length === 0? 
                        ((this.props.selectedId.slice(0, this.props.sectionID.length) === this.props.sectionID)?  
                            <div className={this.props.isSmallBlock? "smallBlockBlankSelected": "blockBlankSelected"}> Tap to see exact location</div>: 
                            <div className={this.props.isSmallBlock? "smallBlockBlank": "blockBlank"}></div>): 
                        (<div>
                                {gridData.map((row, index1) => {
                                    return <div className="blockRow" key={index1}> 
                                        {row.map((cell, index2) => {
                                            var trimmed = cell.trim();
                                            return <div key={index2}> 
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

export default Block2;
