import { Link } from 'react-router-dom';

const MovieList = ({ values, location }) => {
  return (
    <ul>
      {values.map(value => (
        <li key={value.id}>
          <Link to={`${value.id}`} state={{ from: location }}>
            {value.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
