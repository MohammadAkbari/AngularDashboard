import React, { Component } from "react";

import apple from './apple.png';

class Apple extends Component {

    constructor(props) {
        super(props);

        console.log("Apple");
    }

    render() {

        console.log("Apple rendering");

        return (
            <div className="box">
                <img src={apple} width="100" />
                Apple
            </div>
        );
    }
}

export default Apple;