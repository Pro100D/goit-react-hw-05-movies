import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchDetailsInfoFilm } from '../services/fetchDetailsInfoFilm';
import { fetchCastFilm } from '../services/fetchCastFilm';
const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState({});
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchDetailsInfoFilm(movieId).then(data => {
      console.log(data);
      return setFilmDetails(data);
    });
  }, [movieId]);

  useEffect(() => {
    fetchCastFilm(movieId).then(data => {
      console.log(data);
      return setCast(data.cast);
    });
  }, [movieId]);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${filmDetails.poster_path}`}
        alt=""
      />
      <h1>{filmDetails.title}</h1>
      <p>{filmDetails.overview}</p>
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
