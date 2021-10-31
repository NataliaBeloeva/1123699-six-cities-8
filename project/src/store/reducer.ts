import {State} from '../types/state';
import {Actions, ActionType} from '../types/action';
import {AuthorizationStatus, City, SortType} from '../const';

const initialState = {
  currentCity: City.Paris,
  currentSortOption: SortType.Popular,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  user: null,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SwitchCity:
      return {...state, currentCity: action.payload};
    case ActionType.SwitchSort:
      return {...state, currentSortOption: action.payload};
    case ActionType.LoadOffers:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.UserLogin:
      return {
        ...state,
        user: action.payload,
        authorizationStatus: AuthorizationStatus.Auth,
      };
    case ActionType.UserLogout:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };
    case ActionType.ResetOffers:
      return {...initialState};
    default:
      return state;
  }
};

export {reducer};
