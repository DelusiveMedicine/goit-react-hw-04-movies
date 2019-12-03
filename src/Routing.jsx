import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './components/MoviesPage/MoviesPage';

const Routing = () => (
  <Fragment>
    <Route exact path="/" component={HomePage} />
    <Route
      strict
      path="/movies/:movieId"
      render={props => <MovieDetailsPage {...props} />}
    />
    <Route exact path="/movies" component={MoviesPage} />
  </Fragment>
);

export default Routing;
