import React, { Component } from 'react';

class List extends Component {
    render() {

        return (
            this.props.items.map((item) => (
                <Item text={item} />
            ))
        );
    }
}

class Item extends Component {
    render() {
        return (
            <p>{this.props.text}</p>
            );
    }
}

export default List;