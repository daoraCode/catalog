import React, { Component } from 'react';
import data from '../data/movie.json';
import { Link } from 'react-router-dom';

class Movies extends Component {
    constructor () {
        super()
        // initial state
        this.state = {
            movies: data
        }
    }
    render() {
        // destructuring a state to get less code
        const { movies } = this.state;
        return (
            <>
                {movies.map(movie => (
                    <Link
                        key={`${movie.id}-${movie.title}`}
                        // url path defined
                        to={`/movie/${movie.id}`}
                    >
                        <div className="movieCard">
                            <h1>{movie.title}</h1>
                        </div>
                    </Link>
                ))
                }

            </>
        );
    }
}

export default Movies;