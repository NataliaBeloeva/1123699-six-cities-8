import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {AppRoute, City, ReviewStatus, SortType} from '../const';
import {Offer, Offers} from './offer';
import {State} from './state';
import {User} from './user';
import {Reviews} from './review';

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

type SwitchCityAction = {
  type: ActionType.SwitchCity;
  payload: City;
};

type SwitchSortAction = {
  type: ActionType.SwitchSort;
  payload: SortType;
};

type LoadOffersAction = {
  type: ActionType.LoadOffers;
  payload: Offers;
};

type LoadOfferAction = {
  type: ActionType.LoadOffer;
};

type LoadOfferCompleteAction = {
  type: ActionType.LoadOfferComplete;
  payload: Offer;
};

type LoadOfferErrorAction = {
  type: ActionType.LoadOfferError;
};

type LoadOffersNearbyAction = {
  type: ActionType.LoadOffersNearby;
  payload: Offers;
};

type LoadReviewsAction = {
  type: ActionType.LoadReviews;
  payload: Reviews;
};

type UploadReviewAction = {
  type: ActionType.UploadReview;
  payload: ReviewStatus;
}

type UserLoginAction = {
  type: ActionType.UserLogin;
  payload: User;
};

type UserLogoutAction = {
  type: ActionType.UserLogout;
};

type RedirectToRouteAction = {
  type: ActionType.RedirectToRoute;
  payload: AppRoute;
};

type Actions = SwitchCityAction | SwitchSortAction | LoadOffersAction | LoadOfferAction | LoadOfferCompleteAction | LoadOfferErrorAction  | LoadOffersNearbyAction | LoadReviewsAction | UploadReviewAction | UserLogoutAction | UserLoginAction | RedirectToRouteAction;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export {ActionType};
export type {Actions, SwitchCityAction, SwitchSortAction, LoadOffersAction, LoadOfferAction, LoadOfferCompleteAction, LoadOfferErrorAction, LoadOffersNearbyAction, LoadReviewsAction, UploadReviewAction, UserLogoutAction, UserLoginAction, ThunkActionResult, ThunkAppDispatch, RedirectToRouteAction};
