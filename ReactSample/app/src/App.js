import React, { Component } from 'react';

import {
    BrowserRouter as Router
} from 'react-router-dom';

import Main from './Main';
import Header from './Header';

import logo from './logo.svg';
import './App.css';
import './bootstrap.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    <Router>
                        <div className="container">
                            <Header />
                            <div className="col-xs-12 highlight">
                                <Main />
                            </div>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;