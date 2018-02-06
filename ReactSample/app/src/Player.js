import React, { Component } from 'react';
import PlayerAPI from './PlayerAPI';
import { Link } from 'react-router-dom';

class Player extends Component {

    player = PlayerAPI.get(
        parseInt(this.props.match.params.number, 10)
    )

    render() {
        return (
            <div>
                <h1>{this.player.name} (#{this.player.number})</h1>
                <h2>Position: {this.player.position}</h2>
                <Link to='/roster'>Back</Link>
            </div>
        );
    }
}

export default Player;