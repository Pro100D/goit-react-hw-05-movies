import axios from 'axios';

const API = '5a45960aa9b19faa72924039862aa15f';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const fetchFilmsOrQuery = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?language=en-US&api_key=${API}&query=${query}`
  );

  return response.data;
};
