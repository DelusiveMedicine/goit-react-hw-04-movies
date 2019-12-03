import React, { Component } from 'react';
import { fetchMovieReviews } from '../../API';

class Reviews extends Component {
  state = { reviews: [] };
  IMG = 'https://image.tmdb.org/t/p/w500';
  componentDidMount = () => {
    const { movieId } = this.props.match.params;
    fetchMovieReviews(movieId).then(({ data }) =>
      this.setState({ reviews: data.results }),
    );
  };
  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {reviews.length > 0 ? (
          reviews.map(el => (
            <li key={el.id}>
              <b>Author: {el.author}</b>
              <p>{el.content}</p>
            </li>
          ))
        ) : (
          <span>We don't have any reviews for this movie</span>
        )}
      </ul>
    );
  }
}

export default Reviews;
