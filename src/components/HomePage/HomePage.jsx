import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from '../../API';

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
          {trending.map(el => (
            <li key={el.id}>
              <Link
                to={{
                  pathname: `/movies/${el.id}`,
                  state: { type: el.media_type },
                }}
              >
                {el.title || el.name}
              </Link>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default HomePage;
