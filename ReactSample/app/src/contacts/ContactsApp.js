import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactsApp extends Component {

    constructor() {
        super();
        this.state = {
            filterText: ''
        };
    }

    handleUserInput(searchTerm) {
        this.setState({ filterText: searchTerm })
    }

    render() {

        console.log("render");

        let contacts = [
            { name: "Cassio Zen", email: "cassiozen@gmail.com" },
            { name: "Dan Abramov", email: "gaearon@somewhere.com" },
            { name: "Pete Hunt", email: "floydophone@somewhere.com" },
            { name: "Paul O’Shannessy", email: "zpao@somewhere.com" },
            { name: "Ryan Florence", email: "rpflorence@somewhere.com" },
            { name: "Sebastian Markbage", email: "sebmarkbage@here.com" },
        ];

        return (
            <div>
                <SearchBar filterText={this.state.filterText}
                           onUserInput={this.handleUserInput.bind(this)}/>
                <ContactList contacts={contacts}
                    filterText={this.state.filterText} />
            </div>
        )
    }
}

class SearchBar extends Component {

    constructor() {
        super();
        console.log("ContactsApp");
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");

        return true;
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    handleChange(event) {
        this.props.onUserInput(event.target.value)
    }

    render() {
        return <input type="search" placeholder="search"
            value={this.props.filterText}
            onChange={this.handleChange.bind(this)}/>
    }
}
SearchBar.propTypes = {
    filterText: PropTypes.string.isRequired,
    onUserInput: PropTypes.func.isRequired
}

class ContactList extends Component {
    render() {

        let filteredContacts = this.props.contacts.filter(
            (contact) => contact.name.indexOf(this.props.filterText) !== -1
        );

        return (
            <ul>
                {filteredContacts.map(
                    (contact) => <ContactItem key={contact.email}
                        name={contact.name}
                        email={contact.email} />
                )}
            </ul>
        )
    }
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

class ContactItem extends Component {
    render() {
        return <li>{this.props.name} - {this.props.email}</li>
    }
}
ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default ContactsApp;