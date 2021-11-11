import {ReviewStatus} from '../../const';
import {Actions, ActionType} from '../../types/action';
import {ReviewsProcess} from '../../types/state';

const initialState: ReviewsProcess = {
  reviews: [],
  isReviewsLoaded: false,
  reviewStatus: ReviewStatus.Unknown,
};

const reviewsProcess = (state = initialState, action: Actions): ReviewsProcess => {
  switch (action.type) {
    case ActionType.LoadReviews:
      return {...state, reviews: action.payload, isReviewsLoaded: true};
    case ActionType.UploadReview:
      return {...state, reviewStatus: action.payload};
    default:
      return state;
  }
};

export {reviewsProcess};
