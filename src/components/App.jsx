import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import Layout from 'components/Layout';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';

const App = () => {
  return (
    <>
      <Routes>
        <Route to="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
export default App;
