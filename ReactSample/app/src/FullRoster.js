import React, { Component } from 'react';
import PlayerAPI from './PlayerAPI';
import { Link } from 'react-router-dom';

class FullRoster extends Component {
     
    render() {

        var items = PlayerAPI.all();

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((p) => (
                            <tr>
                                <td>{p.number}</td>
                                <td>{p.name}</td>
                                <td>{p.position}</td>
                                <td><Link to={`/roster/${p.number}`}>Detail</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

export default FullRoster;