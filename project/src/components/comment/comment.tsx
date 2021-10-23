import {getRating} from '../../utils/offer';
import {Review} from '../../types/review';

type ReviewProps = {
  review: Review;
};

function Comment({review}: ReviewProps): JSX.Element {
  const {id, user, reviewRating, comment, date} = review;
  const formatDate= (datetime: string) => new Date(datetime).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});
  const formatDateAttribute = (datetime: string) => new Date(datetime).toLocaleDateString('en-CA');

  return (
    <li key={`${id}`} className="reviews__item" id={`${id}`}>
      <div className="reviews__user user"id={`${user.id}`}>
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRating(reviewRating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={formatDateAttribute(date)}>{formatDate(date)}</time>
      </div>
    </li>
  );
}

export default Comment;
