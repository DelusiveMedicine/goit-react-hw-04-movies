import React, { Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';

const App = () => (
  <Fragment>
    <nav>
      <NavLink activeStyle={{ color: 'purple', textDecoration: 'none' }} to="/">
        Home
      </NavLink>
      <NavLink
        activeStyle={{ color: 'purple', textDecoration: 'none' }}
        to="/movies"
      >
        Movie
      </NavLink>
    </nav>
    <Route exact path="/" component={HomePage} />
    <Route
      path="/movies/:movieId"
      render={props => <MovieDetailsPage {...props} />}
    />
  </Fragment>
);

export default App;
