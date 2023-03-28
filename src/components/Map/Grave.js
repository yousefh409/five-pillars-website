import React, { Component } from "react";
import "./Grave.css"
class Grave extends Component {
    constructor(props) {
        super(props);
    }
    render = () => {
        return (
            <div className="grave">
                {this.props.data}
            </div>
        )
    };
};

export default Grave;