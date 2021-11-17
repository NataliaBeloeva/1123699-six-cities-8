import {useMemo} from 'react';
import {MAX_REVIEWS_AMOUNT} from '../../const';
import {Reviews} from '../../types/review';
import Comment from '../comment/comment';

type ReviewsListProps = {
  reviews: Reviews;
};

function CommentList({reviews}: ReviewsListProps): JSX.Element {
  const reviewsShown = useMemo(() =>
    [...reviews]
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      .slice(0, MAX_REVIEWS_AMOUNT),
  [reviews]);

  return (
    <ul className="reviews__list">
      {reviewsShown.map((review) => <Comment key={review.id} review={review} />)}
    </ul>
  );
}

export default CommentList;
