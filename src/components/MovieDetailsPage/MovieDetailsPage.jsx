import React, { Fragment } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import { fetchMovieDetails } from '../helpers/API';
import ClassComponent from '../../decorators/ClassComponent';
import handleGoBack from '../helpers/GoBackHandler';
import { MovieDetails, MoviePoster, Button, AdditionalInfo } from './styles';

const MovieDetailsPage = props => {
  const IMG = 'https://image.tmdb.org/t/p/w500';
  const { data } = props;
  if (data) {
    const { url } = props.match;
    const {
      title,
      poster_path,
      vote_average,
      overview,
      genres,
      release_date,
    } = data;
    const releaseDate = release_date.slice(0, 4);
    return (
      <Fragment>
        <Button type="button" onClick={() => handleGoBack(props)}>
          Go back
        </Button>
        <MovieDetails>
          <MoviePoster src={IMG + poster_path} alt={title} />
          <div>
            <h1>
              {title} ({releaseDate})
            </h1>
            <span>User Score {vote_average * 10}%</span>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            {genres && genres.map(el => <span key={el.id}>{el.name} </span>)}
          </div>
        </MovieDetails>
        <AdditionalInfo>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to={`${url}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${url}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </AdditionalInfo>
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
  return null;
};

export default ClassComponent(MovieDetailsPage, {
  fetchData: fetchMovieDetails,
});
