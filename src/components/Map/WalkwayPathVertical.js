import React, { Component } from "react";
import "./Walkway.css"
class WalkwayPathVertical extends Component {
    constructor(props) {
        super(props);
    }
    render = () => {
        return (
            <div>
                <div className="walkwayPathVertical"></div>
                <div className="walkwayPathGate"> Gate </div>
            </div>
        )
    };
};

export default WalkwayPathVertical;