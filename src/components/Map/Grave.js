import React, { Component } from "react";
import "./Grave.css"
class Grave extends Component {
    constructor(props) {
        super(props);
    }
    render = () => {
        var id = this.props.sectionID + this.props.data.split(' ')[0];
        var dateOfDeath = this.props.data.split(' ')[-1]
        return (
            <div className="grave">
                {id}
            </div>
        )
    };
};

export default Grave;