import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { fetchMovies } from '../helpers/API';
import SearchBar from './styles';

class MoviesPage extends Component {
  state = { movies: [], query: '' };

  componentDidMount = () => {
    const queryParams = queryString.parse(this.props.location.search);
    const { query } = queryParams;
    if (query) {
      fetchMovies(query).then(({ data }) => {
        this.setState({ movies: data.results });
      });
    }
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    this.setState({ query: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    const { history } = this.props;
    fetchMovies(query)
      .then(({ data }) => {
        this.setState({ movies: data.results, query: '' });
      })
      .then(
        history.push({
          pathname: this.props.location.pathname,
          search: `query=${query}`,
        }),
      );
  };

  render() {
    const { movies } = this.state;

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <SearchBar type="text" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <ul>
          {movies.map(el => (
            <li key={el.id}>
              <Link
                to={{
                  pathname: `/movies/${el.id}`,
                  state: { from: this.props.location },
                }}
              >
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default MoviesPage;
