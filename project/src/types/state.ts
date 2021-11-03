import {AuthorizationStatus} from '../const';
import {Offers} from './offer';
import {User} from './user';

type State = {
  currentCity: string;
  currentSortOption: string;
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  user: User | null;
};

export type {State};
