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

    // Convert flat data into 2D grid format
    getGridData() {
        const { sectionData, sectionID } = this.props;
        if (!sectionData || sectionData.length === 0) return [];

        // Separate graves and walkway marker
        const graves = [];
        let walkwaySplitPoint = null;
        
        for (const record of sectionData) {
            if (record.location.includes('_WALKWAY')) {
                // date_of_death contains the split point
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

        // Blocks (AS, BS, etc.) don't have internal walkways
        // Just arrange graves into rows of 10 columns
        const cols = this.props.isSmallBlock ? 5 : 10;
        const grid = [];
        
        for (let i = 0; i < graves.length; i += cols) {
            const row = graves.slice(i, i + cols).map(record => {
                const graveNum = record.location.replace(sectionID, '').padStart(2, '0');
                return `${graveNum} ${record.name} ${record.date_of_death || 'None'}`;
            });
            // Pad row with empty graves if needed
            while (row.length < cols) {
                row.push('Empty');
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
