import React, { Component } from "react";
import "./Grave.css"
class EmptyGrave extends Component {
    constructor(props) {
        super(props);
    }
    render = () => {
        return (
            <div className="emptyGrave" />
        )
    };
};

export default EmptyGrave;