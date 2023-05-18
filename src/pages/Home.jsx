import { useEffect, useState } from 'react';
import { fetchAllTrenders } from '../services/fetchAllTrending';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchAllTrenders().then(data => setData(data.results));
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {data.map(film => (
          <li key={film.id}>
            <Link to={`movies/${film.id}`} state={{ from: location }}>
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
