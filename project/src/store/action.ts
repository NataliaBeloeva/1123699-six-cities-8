import {AppRoute, City, ReviewStatus, SortType} from '../const';
import {ActionType, SwitchCityAction, SwitchSortAction, LoadOffersAction, LoadOfferAction, LoadOfferCompleteAction, LoadOfferErrorAction, LoadOffersNearbyAction, LoadReviewsAction, UserLogoutAction, UserLoginAction, RedirectToRouteAction, UploadReviewAction} from '../types/action';
import {Offer, Offers} from '../types/offer';
import {Reviews} from '../types/review';
import {User} from '../types/user';

const switchCity = (city: City): SwitchCityAction => ({
  type: ActionType.SwitchCity,
  payload: city,
});

const switchSort = (sortType: SortType): SwitchSortAction => ({
  type: ActionType.SwitchSort,
  payload: sortType,
});

const loadOffers = (offers: Offers): LoadOffersAction => ({
  type: ActionType.LoadOffers,
  payload: offers,
});

const loadOffer = (): LoadOfferAction => ({
  type: ActionType.LoadOffer,
});

const loadOfferComplete = (offer: Offer): LoadOfferCompleteAction => ({
  type: ActionType.LoadOfferComplete,
  payload: offer,
});

const loadOfferError = (): LoadOfferErrorAction => ({
  type: ActionType.LoadOfferError,
});

const loadOffersNearby = (offers: Offers): LoadOffersNearbyAction => ({
  type: ActionType.LoadOffersNearby,
  payload: offers,
});

const loadReviews = (reviews: Reviews): LoadReviewsAction => ({
  type: ActionType.LoadReviews,
  payload: reviews,
});

const uploadReview = (postStatus: ReviewStatus): UploadReviewAction => ({
  type: ActionType.UploadReview,
  payload: postStatus,
});

const userLogin = (user: User): UserLoginAction => ({
  type: ActionType.UserLogin,
  payload: user,
});

const userLogout = (): UserLogoutAction => ({
  type: ActionType.UserLogout,
});

const redirectToRoute = (url: AppRoute): RedirectToRouteAction => ({
  type: ActionType.RedirectToRoute,
  payload: url,
});

export {switchCity, switchSort, loadOffers, loadOffer, loadOfferComplete, loadOfferError, loadOffersNearby, loadReviews, uploadReview, userLogin, userLogout, redirectToRoute};
