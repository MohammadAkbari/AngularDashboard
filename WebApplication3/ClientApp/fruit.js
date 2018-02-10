import React, { Component } from "react";
import Orange from './orange';
import Apple from './apple';

import './style.css';

class Fruit extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <Orange />
                <Apple />
            </div>
        );
    }
}

export default Fruit;