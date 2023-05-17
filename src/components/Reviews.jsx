import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  return <div>reviews: {movieId}</div>;
};
export default Reviews;
