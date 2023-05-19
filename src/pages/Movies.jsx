import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchFilmsOrQuery } from '../services/fetchFilmsOrQuery';

import MovieList from '../components/MovieList';
import SearchForm from '../components/SearchForm';

const Movies = () => {
  const [serchParams, setSerchParams] = useSearchParams();
  const query = serchParams.get('query') ?? '';

  const [values, setValues] = useState([]);

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

      <MovieList values={values} />
    </div>
  );
};

export default Movies;
