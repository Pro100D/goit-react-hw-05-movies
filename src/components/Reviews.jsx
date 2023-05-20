import { useParams } from 'react-router-dom';
import { fetchReviews } from '../services/allFetchs';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchReviews(movieId).then(data => {
      return setReviews(data.results);
    });
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>reviews:</p>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};
export default Reviews;
