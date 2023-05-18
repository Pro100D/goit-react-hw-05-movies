import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchFilmsOrQuery } from '../services/fetchFilmsOrQuery';

import MovieList from '../components/MovieList';
import SearchForm from '../components/SearchForm';

const Movies = () => {
  const [serchParams, setSerchParams] = useSearchParams();
  const query = serchParams.get('query') ?? '';

  const [values, setValues] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchFilmsOrQuery(query).then(data => setValues(data.results));
  }, [query]);

  const handleSubmit = value => {
    setSerchParams({ query: value });
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />

      <MovieList values={values} location={location} />
    </div>
  );
};

export default Movies;
