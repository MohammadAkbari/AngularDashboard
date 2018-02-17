import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Roster from './Roster';
import Schedule from './Schedule';
import Users from './Users';
import ReduxSample from './ReduxSample';
import BankAppEntrance from './bank/BankAppEntrance';
import AirlineEntrance from './airline/AirlineEntrance';
import ContactsApp from './contacts/ContactsApp';

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact={false} path='/' component={Home} />
                    <Route path='/roster' component={Roster} />
                    <Route path='/schedule' component={Schedule} />
                    <Route path='/users' component={Users} />
                    <Route path='/redux' component={ReduxSample} />
                    <Route path='/bank' component={BankAppEntrance} />
                    <Route path='/airline' component={AirlineEntrance} />
                    <Route path='/contacts' component={ContactsApp} />
                </Switch>
            </main>
        );
    }
}

export default Main;