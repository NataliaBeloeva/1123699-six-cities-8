import {Reviews} from '../../types/review';
import Comment from '../comment/comment';

type ReviewsListProps = {
  reviews: Reviews;
};

function CommentList({reviews}: ReviewsListProps): JSX.Element {

  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Comment key={review.id} review={review} />)}
    </ul>
  );
}

export default CommentList;
