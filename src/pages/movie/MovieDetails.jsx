import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchDetailsInfoFilm } from '../../services/allFetchs';
import {
  MovieDetailsLinkStyled,
  FlexBlockMovieDetails,
  GanresBlock,
  LinkStyled,
} from './MovieDetails.styled';

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
      <MovieDetailsLinkStyled to={location?.state?.from || '/'}>
        Go Back
      </MovieDetailsLinkStyled>
      <FlexBlockMovieDetails>
        <div>
          <img
            width="500"
            src={
              filmDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${filmDetails.poster_path}`
                : 'http://placehold.it/640x70/'
            }
            alt=""
          />
        </div>
        <div>
          <div>
            <h1>{filmDetails.title}</h1>
            <p>Overview: {filmDetails.overview}</p>
          </div>
          <div>
            <h2>Ganres:</h2>
            <GanresBlock>
              {genres.map(genr => (
                <p key={genr.id}>{genr.name}</p>
              ))}
            </GanresBlock>
          </div>
          <ul>
            <li>
              <LinkStyled to="cast" state={{ from: location }}>
                Cast
              </LinkStyled>
            </li>
            <li>
              <LinkStyled to="reviews" state={{ from: location }}>
                Reviews
              </LinkStyled>
            </li>
          </ul>

          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </FlexBlockMovieDetails>
    </div>
  );
};
export default MovieDetails;
