import React from 'react';
import {useState, ChangeEvent} from 'react';
import {initialComment, ratingStars} from './const';

function CommentFormScreen(): JSX.Element {

  const [comment, setComment] = useState(initialComment);

  const isSubmitDisabled = comment.rating === initialComment.rating || comment.text === initialComment.text;

  const handleRadioChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setComment((prevComment) => ({ ...prevComment, rating: evt.target.value }));
  };

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment((prevComment) => ({ ...prevComment, text: evt.target.value }));
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map((star) => (
          <React.Fragment key={`${star.value}`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={`${star.value}`}
              id={star.id}
              type="radio"
              onChange={handleRadioChange}
            />
            <label htmlFor={star.id} className="reviews__rating-label form__rating-label" title={star.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextareaChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default CommentFormScreen;
