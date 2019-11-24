import React, { Component, Fragment } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import { fetchMovieDetails } from '../../API';

class MovieDetailsPage extends Component {
  state = { movieDetails: {} };
  IMG = 'https://image.tmdb.org/t/p/w500';
  componentDidMount = () => {
    const { type } = this.props.location.state;
    const { movieId } = this.props.match.params;
    fetchMovieDetails(movieId, type).then(({ data }) =>
      this.setState({ movieDetails: data }),
    );
  };

  render() {
    const { movieDetails } = this.state;
    const { state } = this.props.location;
    const { url } = this.props.match;
    const {
      title,
      name,
      poster_path,
      vote_average,
      overview,
      genres,
    } = movieDetails;
    console.log(this.props);
    return (
      <Fragment>
        <div style={{ display: 'flex' }}>
          <img width="300" src={this.IMG + poster_path} alt={title} />
          <div>
            <h1>{title || name}</h1>
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
              <Link
                to={{
                  pathname: `${url}/cast`,
                  state: { type: state.type },
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${url}/reviews`,
                  state: { type: state.type },
                }}
              >
                Reviews
              </Link>
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
