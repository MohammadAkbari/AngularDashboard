import React, { Component } from 'react';
import { Provider } from 'react-redux';

import BankAppContainer from './BankApp';
import bankStore from './bankStore'

class BankAppEntrance extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Provider store={bankStore}>
                <BankAppContainer />
            </Provider>
        );
    }
}

export default BankAppEntrance;