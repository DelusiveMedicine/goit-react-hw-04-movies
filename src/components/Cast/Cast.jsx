import React from 'react';
import { fetchMovieCast } from '../helpers/API';
import ClassComponent from '../../decorators/ClassComponent';
import { CastList, Photo } from './styles';

const Cast = ({ data }) => {
  const IMG = 'https://image.tmdb.org/t/p/w500';
  if (data)
    return data.cast.map(el => (
      <CastList key={el.cast_id}>
        <li>
          <Photo src={IMG + el.profile_path} alt={el.name} />
        </li>
        <li>{el.name}</li>
        <li>Character: {el.character}</li>
      </CastList>
    ));
  return null;
};

export default ClassComponent(Cast, { fetchData: fetchMovieCast });
