import {AuthStatus, City, ReviewStatus, SortType} from '../const';
import {RootState} from '../store/root-reducer';
import {Offer, Offers} from './offer';
import {Reviews} from './review';
import {User} from './user';

type OffersData = {
  offers: Offers;
  offer: Offer | null;
  offersNearby: Offers;
  isDataLoaded: boolean;
  isOfferLoading: boolean;
  isOfferError: boolean;
  isOffersNearbyLoaded: boolean;
};

type FavoritesData = {
  offersFavorite: Offers;
  isOffersFavoriteLoaded: boolean;
};

type AppProcess = {
  currentCity: City;
  currentSortOption: SortType;
};

type UserProcess = {
  authStatus: AuthStatus;
  user: User | null;
};

type ReviewsProcess = {
  reviews: Reviews;
  isReviewsLoaded: boolean;
  reviewStatus: ReviewStatus;
};

export type State = RootState;

export type {AppProcess, UserProcess, ReviewsProcess, OffersData, FavoritesData};
