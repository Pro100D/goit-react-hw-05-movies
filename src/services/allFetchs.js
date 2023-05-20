import axios from 'axios';

const API = '5a45960aa9b19faa72924039862aa15f';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchAllTrenders = async () => {
  const response = await axios.get(`trending/all/day?api_key=${API}`);

  return response.data;
};

export const fetchCastFilm = async filmId => {
  const response = await axios.get(
    `movie/${filmId}/credits?language=en-US&api_key=${API}`
  );

  return response.data;
};

export const fetchDetailsInfoFilm = async filmId => {
  const response = await axios.get(
    `movie/${filmId}?language=en-US&api_key=${API}`
  );

  return response.data;
};

export const fetchFilmsOrQuery = async query => {
  const response = await axios.get(
    `search/movie?language=en-US&api_key=${API}&query=${query}`
  );

  return response.data;
};

export const fetchReviews = async filmId => {
  const response = await axios.get(
    `movie/${filmId}/reviews?language=en-US&api_key=${API}`
  );

  return response.data;
};
