import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink exact={true} to='/' className="nav-link" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/roster' className="nav-link" activeClassName="active">Roster</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/schedule' className="nav-link" activeClassName="active">Schedule</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/users' className="nav-link" activeClassName="active">Users</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/redux' className="nav-link" activeClassName="active">Redux</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/bank' className="nav-link" activeClassName="active">Bank</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/airline' className="nav-link" activeClassName="active">AirCheap</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/contacts' className="nav-link" activeClassName="active">Contacts</NavLink>
                    </li>
                </ul>
                <hr/>
            </header>
        );
    }
}

export default Header;