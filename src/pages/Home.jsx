import { useEffect, useState } from 'react';
import { fetchAllTrenders } from '../services/fetchAllTrending';

import MovieList from 'components/MovieList';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAllTrenders().then(data => setData(data.results));
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <MovieList values={data} />
    </div>
  );
};

export default Home;
