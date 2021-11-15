import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Movie from '../views/Movies';

class Nav extends Component {
    render() {
        return (
            <div class="container">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movie">Movies</Link>
                </nav>
                <Route
                    path="/movie/:title"
                    component={Movie}
                />
            </div>
        );
    }
}

export default Nav;