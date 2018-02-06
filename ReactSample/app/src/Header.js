import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <ul className="nav">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/roster' className="nav-link">Roster</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/schedule' className="nav-link">Schedule</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/users' className="nav-link">Users</Link>
                    </li>
                </ul>
                <hr/>
            </header>
        );
    }
}

export default Header;