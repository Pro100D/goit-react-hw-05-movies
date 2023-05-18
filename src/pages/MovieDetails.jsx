import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchDetailsInfoFilm } from '../services/fetchDetailsInfoFilm';

const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const location = useLocation();

  const { movieId } = useParams();

  useEffect(() => {
    fetchDetailsInfoFilm(movieId).then(data => {
      setFilmDetails(data);
      setGenres(data.genres);
    });
  }, [movieId]);

  return (
    <div>
      <Link to={location.state.from}>Go Back</Link>
      <img
        src={`https://image.tmdb.org/t/p/w500${filmDetails.poster_path}`}
        alt=""
      />
      <h1>{filmDetails.title}</h1>

      <p>Overview: {filmDetails.overview}</p>
      <div>
        <h2>Ganres:</h2>
        {genres.map(genr => (
          <p key={genr.id}>{genr.name}</p>
        ))}
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
