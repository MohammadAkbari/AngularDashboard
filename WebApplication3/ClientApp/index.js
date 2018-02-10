import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './style.css';

class Message extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <div>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Message title="React" description="A JavaScript library for building user interfaces" />,
    document.getElementById("react-container"))