import {FormEvent, Fragment, useState, ChangeEvent, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CommentLength, ReviewStatus} from '../../const';
import {ratingStars} from './const';
import {postReview} from '../../store/api-action';
import {getReviewsStatus} from '../../store/reviews-process/selectors';

type CommentFormProps = {
  id: string,
}

function CommentForm(props: CommentFormProps): JSX.Element {
  const {id} = props;
  const reviewStatus = useSelector(getReviewsStatus);

  const [isReviewUploading, isReviewUploaded, isReviewNotUploaded] = [
    reviewStatus === ReviewStatus.Uploading,
    reviewStatus === ReviewStatus.Uploaded,
    reviewStatus === ReviewStatus.NotUploaded,
  ];

  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const isFormComplete = comment.length > CommentLength.MIN && rating > 0;

  const handleRadioChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReview({comment, rating}, id));
  };

  useEffect(() => {
    if (isReviewUploaded) {
      setRating(0);
      setComment('');
    }
  }, [isReviewUploaded]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map(({value, title}) => (
          <Fragment key={`${value}`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              type="radio"
              value={`${value}`}
              id={`${value}-stars`}
              checked={value === rating}
              onChange={handleRadioChange}
              disabled={isReviewUploading}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        maxLength={CommentLength.MAX}
        value={comment}
        onChange={handleTextareaChange}
        disabled={isReviewUploading}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isReviewNotUploaded && (!isFormComplete || isReviewUploading)}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
