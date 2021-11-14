import {createReducer} from '@reduxjs/toolkit';
import {ReviewStatus} from '../../const';
import {ReviewsProcess} from '../../types/state';
import {loadReviews, uploadReview} from '../action';

const initialState: ReviewsProcess = {
  reviews: [],
  isReviewsLoaded: false,
  reviewStatus: ReviewStatus.Unknown,
};

const reviewsProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.isReviewsLoaded = true;
    })
    .addCase(uploadReview, (state, action) => {
      state.reviewStatus = action.payload;
    });
});

export {reviewsProcess};
