import React, { Component } from "react";

import apple from './apple.png';

class Apple extends Component {
    render() {
        return (
            <div>
                <img src={apple} width="100" />
                Apple
            </div>
        );
    }
}

export default Apple;