import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from '../helpers/API';

class HomePage extends Component {
  state = { trending: [] };
  componentDidMount = () => {
    fetchTrending().then(({ data }) =>
      this.setState({ trending: data.results }),
    );
  };
  render() {
    const { trending } = this.state;
    return (
      <Fragment>
        <h1>Trending today</h1>
        <ul>
          {trending.map(el =>
            el.media_type === 'movie' ? (
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
            ) : null,
          )}
        </ul>
      </Fragment>
    );
  }
}

export default HomePage;
