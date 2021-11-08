import {State} from '../types/state';
import {Actions, ActionType} from '../types/action';
import {AuthStatus, City, ReviewStatus, SortType} from '../const';

const initialState = {
  currentCity: City.Paris,
  currentSortOption: SortType.Popular,
  offers: [],
  offer: null,
  offersNearby: [],
  reviews: [],
  authStatus: AuthStatus.Unknown,
  isDataLoaded: false,
  isOfferLoading: false,
  isOfferError: false,
  isOffersNearbyLoaded: false,
  isReviewsLoaded: false,
  isPostReviewError: false,
  reviewStatus: ReviewStatus.Unknown,
  user: null,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SwitchCity:
      return {...state, currentCity: action.payload};
    case ActionType.SwitchSort:
      return {...state, currentSortOption: action.payload};
    case ActionType.LoadOffers:
      return {...state, offers: action.payload, isDataLoaded: true};
    case ActionType.LoadOffer:
      return {...state, isOfferLoading: true, isOfferError: false};
    case ActionType.LoadOfferComplete:
      return {...state, offer: action.payload, isOfferLoading: false};
    case ActionType.LoadOfferError:
      return {...state, isOfferLoading: false, isOfferError: true};
    case ActionType.LoadOffersNearby:
      return {...state, offersNearby: action.payload, isOffersNearbyLoaded: true};
    case ActionType.LoadReviews:
      return {...state, reviews: action.payload, isReviewsLoaded: true, isPostReviewError: false};
    case ActionType.UploadReview:
      return {...state, reviewStatus: action.payload};
    case ActionType.UserLogin:
      return {...state, user: action.payload, authStatus: AuthStatus.Auth};
    case ActionType.UserLogout:
      return {...state, user: null, authStatus: AuthStatus.NoAuth};
    default:
      return state;
  }
};

export {reducer};
