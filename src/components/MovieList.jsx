import { useLocation } from 'react-router-dom';
import { MovieListStyled, LinkStyled } from './styledCss/MovieList.styled';

const MovieList = ({ values }) => {
  const location = useLocation();

  return (
    <MovieListStyled>
      {values.map(value => (
        <li key={value.id}>
          <LinkStyled to={`/movies/${value.id}`} state={{ from: location }}>
            {value.title}
          </LinkStyled>
        </li>
      ))}
    </MovieListStyled>
  );
};
export default MovieList;
