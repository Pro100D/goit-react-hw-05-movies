import { useEffect, useState } from 'react';
import { fetchAllTrenders } from '../services/fetchAllTrending';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAllTrenders().then(data => setData(data.results));
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {data.map(film => (
          <li key={film.id}>
            <Link to={`movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
