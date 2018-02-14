import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

    constructor(props) {
        super(props);
    }

    render() { 

        return (
            <div>
                <h1>I am a counter!</h1>
                <p>Count: {this.props.count}</p>
                <button onClick={this.props.onIncrementClick}>Incrment</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("mapStateToProps:", state);
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementClick: () => {
            console.log("Click In");
            const action = { type: "INCREMENT" };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);