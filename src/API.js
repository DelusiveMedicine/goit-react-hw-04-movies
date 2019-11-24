import axios from 'axios';

const KEY = '8498946f9c7874ef33ac19a931c494c9';

export const fetchTrending = () => {
  const API = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`;
  return axios.get(API).then(res => {
    if (res.status === 200) return res;
    throw Error(`${res.status} ${res.statusText}`);
  });
};

export const fetchMovieDetails = (id, type) => {
  const API = `https://api.themoviedb.org/3/${type}/${id}?api_key=${KEY}&language=en-US`;
  return axios.get(API).then(res => {
    if (res.status === 200) return res;
    throw Error(`${res.status} ${res.statusText}`);
  });
};

export const fetchMovieCast = (id, type) => {
  const API = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${KEY}`;
  return axios.get(API).then(res => {
    if (res.status === 200) return res;
    throw Error(`${res.status} ${res.statusText}`);
  });
};

export const fetchMovieReviews = (id, type) => {
  const API = `https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=${KEY}&language=en-US&page=1`;
  return axios.get(API).then(res => {
    if (res.status === 200) return res;
    throw Error(`${res.status} ${res.statusText}`);
  });
};
