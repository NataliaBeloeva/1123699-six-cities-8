import {AuthStatus, City, ReviewStatus, SortType} from '../const';
import {Offer, Offers} from './offer';
import {Reviews} from './review';
import {User} from './user';

type State = {
  currentCity: City;
  currentSortOption: SortType;
  offers: Offers;
  offer: Offer | null;
  offersNearby: Offers;
  reviews: Reviews;
  authStatus: AuthStatus;
  isDataLoaded: boolean;
  isOfferLoading: boolean;
  isOfferError: boolean;
  isOffersNearbyLoaded: boolean;
  isReviewsLoaded: boolean;
  isPostReviewError: boolean;
  reviewStatus: ReviewStatus;
  user: User | null;
};

export type {State};
