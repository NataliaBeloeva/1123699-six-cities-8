import {reviewsProcess} from './reviews-process';
import {fakeReviewsFromAdapter} from '../../utils/mocks';
import {ReviewStatus} from '../../const';
import {loadReviews, uploadReview} from '../action';

describe('Reducer: reviewsProcess', () => {

  it('without additional parameters should return initial state', () => {
    expect(reviewsProcess(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        reviews: [],
        isReviewsLoaded: false,
        reviewStatus: ReviewStatus.Unknown,
      });
  });
  it('should load reviews and set isReviewLoaded to true', () => {
    const state = {
      reviews: [],
      isReviewsLoaded: false,
      reviewStatus: ReviewStatus.Unknown,
    };
    expect(reviewsProcess(state, loadReviews(fakeReviewsFromAdapter)))
      .toEqual({
        reviews: fakeReviewsFromAdapter,
        isReviewsLoaded: true,
        reviewStatus: ReviewStatus.Unknown,
      });
  });

  it('should switch current sort option to a given value', () => {
    const state = {
      reviews: [],
      isReviewsLoaded: false,
      reviewStatus: ReviewStatus.Unknown,
    };
    expect(reviewsProcess(state, uploadReview(ReviewStatus.Uploaded)))
      .toEqual({
        reviews: [],
        isReviewsLoaded: false,
        reviewStatus: ReviewStatus.Uploaded,
      });
  });

});

