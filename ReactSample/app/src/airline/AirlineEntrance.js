import React, { Component } from 'react';
import { Provider } from 'react-redux';

import AirlineContainer from './Airline';
import aircheapStore from './store/aircheapStore';

class AirlineEntrance extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Provider store={aircheapStore}>
                <AirlineContainer />
            </Provider>
        );
    }
}

export default AirlineEntrance;