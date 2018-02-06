import React, { Component } from 'react';
import Pagination from "react-js-pagination";

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { activePage: 1, pageCount: 10, items: [] };
    }

    componentDidMount() {

        var that = this;
        var url = 'https://reqres.in/api/users?page=1&per_page=12'

        fetch(url)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            })
            .then(function (response) {

                that.setState({ activePage: 1, pageCount: 10, items: response.data });
            });
    }

    handlePageClick = function (page) {
        console.log(`Page:${page}`);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.items.map((item) => (
                            <div key={item.id} className="col-md-4">
                                <img src={item.avatar} className="w-100" />
                                {item.first_name} {item.last_name}
                            </div>
                        ))
                    }
                </div>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    itemClass="page-item"
                    linkClass="page-link"
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageClick} />
            </div>
        );
    }
}

export default Users;