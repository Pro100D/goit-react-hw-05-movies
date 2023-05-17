import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6].map(nm => (
        <li key={nm}>
          <Link to={`${nm}`}>{nm}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Movies;
