import {AuthorizationStatus} from '../const';
import {Offers} from './offer';

type State = {
  currentCity: string;
  currentSortOption: string;
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
};

export type {State};
