import React, { Component } from 'react';
import { fetchMovieCast } from '../../API';

class Cast extends Component {
  state = { cast: [] };
  IMG = 'https://image.tmdb.org/t/p/w500';
  componentDidMount = () => {
    const { type } = this.props.location.state;
    const { movieId } = this.props.match.params;
    fetchMovieCast(movieId, type).then(({ data }) =>
      this.setState({ cast: data.cast }),
    );
  };
  render() {
    const { cast } = this.state;
    return cast.map(el => (
      <ul key={el.cast_id}>
        <li>
          <img width="100" src={this.IMG + el.profile_path} alt={el.name} />
        </li>
        <li>{el.name}</li>
        <li>Character: {el.character}</li>
      </ul>
    ));
  }
}

export default Cast;
