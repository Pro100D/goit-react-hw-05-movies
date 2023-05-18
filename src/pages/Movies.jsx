import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { fetchFilmsOrQuery } from '../services/fetchFilmsOrQuery';

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

  return (
    <div>
      <form
        onSubmit={evt => {
          evt.preventDefault();

          setSerchParams({ query: evt.currentTarget.elements.query.value });

          evt.target.reset();
        }}
      >
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {values.map(value => (
          <li key={value.id}>
            <Link to={`${value.id}`} state={{ from: location }}>
              {value.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
