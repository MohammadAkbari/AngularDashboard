import React, { Component } from 'react';

import Counter from './Counter';
import store from './store/ReduxSample'

class ReduxSample extends Component {

    constructor(props) {
        super(props);
    }

    render() { 

        return (
            <div>
                <Counter store={store} />
            </div>
        );
    }
}

export default ReduxSample;