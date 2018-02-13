import React, { Component } from "react";
import Orange from './orange';
import Apple from './apple';
import LazyLoad from 'react-lazyload';

import './style.css';

class Fruit extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <LazyLoad height={800}>
                    <Orange />
                </LazyLoad>
                <LazyLoad height={800}>
                    <Apple />
                </LazyLoad>
            </div>
        );
    }
}

export default Fruit;