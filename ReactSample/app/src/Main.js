import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Roster from './Roster';
import Schedule from './Schedule';
import Users from './Users';

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/roster' component={Roster} />
                    <Route path='/schedule' component={Schedule} />
                    <Route path='/users' component={Users} />
                </Switch>
            </main>
        );
    }
}

export default Main;