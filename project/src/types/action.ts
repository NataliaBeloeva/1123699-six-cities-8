import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {Action} from 'redux';
import {State} from './state';

enum ActionType {
  SwitchCity = 'main/switchCity',
  SwitchSort = 'main/switchSort',
  LoadOffers = 'data/loadOffers',
  LoadOffer = 'data/loadOffer',
  LoadOfferComplete = 'data/loadOfferComplete',
  LoadOfferError = 'data/loadOfferError',
  LoadOffersNearby = 'data/loadOffersNearby',
  LoadReviews = 'data/loadReviews',
  RedirectToRoute = 'app/redirectToRoute',
  UserLogin = 'user/login',
  UserLogout = 'user/logout',
  UploadReview = 'user/uploadReview',
}

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;

export {ActionType};
export type {ThunkActionResult, ThunkAppDispatch};
