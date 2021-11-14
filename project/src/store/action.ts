import {createAction} from '@reduxjs/toolkit';
import {AppRoute, City, ReviewStatus, SortType} from '../const';
import {ActionType} from '../types/action';
import {Offer, Offers} from '../types/offer';
import {Reviews} from '../types/review';
import {User} from '../types/user';

const switchCity = createAction(
  ActionType.SwitchCity,
  (city: City) => ({
    payload: city,
  }),
);

const switchSort = createAction(
  ActionType.SwitchSort,
  (sortType: SortType) => ({
    payload: sortType,
  }),
);

const loadOffers = createAction(
  ActionType.LoadOffers,
  (offers: Offers) => ({
    payload: offers,
  }),
);

const loadOffer = createAction(ActionType.LoadOffer);

const loadOfferComplete = createAction(
  ActionType.LoadOfferComplete,
  (offer: Offer) => ({
    payload: offer,
  }),
);

const loadOfferError = createAction(ActionType.LoadOfferError);

const loadOffersNearby = createAction(
  ActionType.LoadOffersNearby,
  (offers: Offers) => ({
    payload: offers,
  }),
);

const loadReviews = createAction(
  ActionType.LoadReviews,
  (reviews: Reviews) => ({
    payload: reviews,
  }),
);

const uploadReview = createAction(
  ActionType.UploadReview,
  (postStatus: ReviewStatus) => ({
    payload: postStatus,
  }),
);

const userLogin = createAction(
  ActionType.UserLogin,
  (user: User) => ({
    payload: user,
  }),
);

const userLogout = createAction(ActionType.UserLogout);

const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);

export {switchCity, switchSort, loadOffers, loadOffer, loadOfferComplete, loadOfferError, loadOffersNearby, loadReviews, uploadReview, userLogin, userLogout, redirectToRoute};
