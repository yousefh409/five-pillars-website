import React, { Component } from "react";
import "./Grave.css"
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

class Grave extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false
        };
    }

    handleMouseIn() {
        this.setState({ hover: true })
      }
      
      handleMouseOut() {
        this.setState({ hover: false })
      }

    render = () => {
        var id = this.props.sectionID + this.props.data.split(' ')[0];
        var dateOfDeath = this.props.data.split(' ').at(-1)
        var name = this.props.data.split(' ').slice(1, -1).join(' ')
        return (
            <div>
                <div className={this.props.selectedId == id? "graveSelected": "grave"}  data-tooltip-id="my-tooltip" 
                    data-tooltip-html={"<div className='graveTooltip'>" + name + " <br /> Date of Death: " + dateOfDeath + "<div />"} >
                    
                    <div id={"grave-" + id} className="graveText">{id}</div>
                </div>
            </div>
        )
    };
};

export default Grave;