import React, { Component } from 'react';
import data from '../data/movie.json'

class Movie extends Component {
  constructor() {
    super()

    // state initial
    this.state = {
      movie: data
    }
  }

  // componentDidMount() {
  //   const { id } = this.props.match.params
  // }

  render() {
    const { movie } = this.state

    return (
      <div>
        <h1>Page unique de {movie.title}</h1>
        <h1>{movie.image}</h1>
        <h1>{movie.director}</h1>
        <h1>{movie.director}</h1>
      </div>
    )
  }
}

export default Movie;