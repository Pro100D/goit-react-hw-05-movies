import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastFilm } from '../services/allFetchs';
import { CastList, CastListItem } from './styledCss/Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCastFilm(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <div>
      <h2>Cast:</h2>
      <CastList>
        {cast.map(({ id, name, character, profile_path }) => (
          <CastListItem key={id}>
            <img
              width="150px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : 'http://placehold.it/150x225/'
              }
              alt=""
            />
            <p>Name: {name}</p>
            <p>Character: {character}</p>
          </CastListItem>
        ))}
      </CastList>
    </div>
  );
};
export default Cast;
