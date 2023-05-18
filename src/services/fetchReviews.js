import axios from 'axios';

const API = '5a45960aa9b19faa72924039862aa15f';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const fetchReviews = async filmId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${filmId}/reviews?language=en-US&api_key=${API}`
  );

  return response.data;
};
