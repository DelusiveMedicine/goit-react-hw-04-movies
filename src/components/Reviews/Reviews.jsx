import React from 'react';
import { fetchMovieReviews } from '../helpers/API';
import ClassComponent from '../../decorators/ClassComponent';

const Reviews = ({ data }) => {
  if (data) {
    return (
      <ul>
        {data.results.length > 0 ? (
          data.results.map(el => (
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
  return null;
};

export default ClassComponent(Reviews, { fetchData: fetchMovieReviews });
