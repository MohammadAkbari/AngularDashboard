import React, { Component } from 'react';
import List from "./List";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to {this.props.name}</h1>
                <List items={["Java", "C#", "Php"]} />
            </div>
        );
    }
}

export default Home;