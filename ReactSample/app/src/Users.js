import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import logo from './logo.svg';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { page: 1, pageSize: 3, items: [], loading: true };
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    componentDidMount() {

        this.loadData(1);
    }

    loadData(page) {

        var that = this;
        var url = `https://reqres.in/api/users?page=${page}&per_page=3`

        that.setState({ loading: true });

        fetch(url)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            })
            .then(function (response) {

                that.setState({ page: page, items: response.data, totalItemsCount: response.total, loading: false });
            });
    }

    handlePageClick = function (page) {
        this.loadData(page);
    }

    render() {

        let content = null;
        if (this.state.loading) {
            content = <Loading />;
        } else {
            content = <UserList items={this.state.items} />;
        }

        return (
            <div className="container">
                <div className="row content text-center">
                    {content}
                </div>
                <Pagination
                    activePage={this.state.page}
                    itemsCountPerPage={this.state.pageSize}
                    itemClass="page-item"
                    linkClass="page-link"
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageClick} />
            </div>
        );
    }
}

class UserList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            //<ReactCSSTransitionGroup
            //    transitionName="fade"
            //    transitionEnterTimeout={500}
            //    transitionLeaveTimeout={300}
            //    component="div">
                //{
                    this.props.items.map((item) => (
                        <div key={item.id} className="col-md-4">
                            <img src={item.avatar} className="w-100" />
                            {item.first_name} {item.last_name}
                        </div>
                    ))
                //}
            //</ReactCSSTransitionGroup>
        );
    }
}

class Loading extends Component {

    render() {
        return (
            <img src={logo} className="App-logo loading" alt="logo" />
        );
    }
}

export default Users;