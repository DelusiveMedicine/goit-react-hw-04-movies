import React, { Component, Fragment } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import { fetchMovieDetails } from '../../API';

class MovieDetailsPage extends Component {
  state = { movieDetails: {} };
  IMG = 'https://image.tmdb.org/t/p/w500';
  componentDidMount = () => {
    const { movieId } = this.props.match.params;
    fetchMovieDetails(movieId).then(({ data }) =>
      this.setState({ movieDetails: data }),
    );
  };

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state) {
      return this.props.history.push(state.from);
    }

    return this.props.history.push({
      pathname: '/',
    });
  };

  render() {
    const { movieDetails } = this.state;
    const { url } = this.props.match;
    const { title, poster_path, vote_average, overview, genres } = movieDetails;

    return (
      <Fragment>
        <div style={{ display: 'flex' }}>
          <button type="button" onClick={this.handleGoBack}>
            Go back
          </button>
          <img width="300" src={this.IMG + poster_path} alt={title} />
          <div>
            <h1>{title}</h1>
            <span>User Score {vote_average * 10}%</span>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            {genres && genres.map(el => <span key={el.id}>{el.name} </span>)}
          </div>
        </div>
        <div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to={`${url}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${url}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route
              path="/movies/:movieId/cast"
              render={props => <Cast {...props} />}
            />
            <Route
              path="/movies/:movieId/reviews"
              render={props => <Reviews {...props} />}
            />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default MovieDetailsPage;
