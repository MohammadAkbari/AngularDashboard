import React, { Component } from "react";

import orange from './orange.png';

class Orange extends Component {

    constructor(props) {
        super(props);

        console.log("Orange");
    }

    imageClick = (event) => {
        console.log("Image Click!");
    }  

    render() {

        console.log("Orange rendering");

        return (
            <div className="box">
                <img src={orange} width="100" onClick={this.imageClick} />
                Orange
            </div>
        );
    }
}

export default Orange;