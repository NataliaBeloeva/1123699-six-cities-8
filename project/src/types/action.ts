import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {AuthorizationStatus} from '../const';
import {Offers} from './offer';
import {State} from './state';

enum ActionType {
  SwitchCity = 'offers/switchCity',
  SwitchSort = 'offers/switchSort',
  ResetOffers = 'offers/reset',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

type SwitchCityAction = {
  type: ActionType.SwitchCity;
  payload: string;
};

type SwitchSortAction = {
  type: ActionType.SwitchSort;
  payload: string;
};

type LoadOffersAction = {
  type: ActionType.LoadOffers;
  payload: Offers;
};

type ResetOffersAction = {
  type: ActionType.ResetOffers;
};

type RequireAuthorizationAction = {
  type: ActionType.RequireAuthorization;
  payload: AuthorizationStatus;
};

type RequireLogoutAction = {
  type: ActionType.RequireLogout;
};

type Actions = SwitchCityAction | SwitchSortAction | LoadOffersAction | ResetOffersAction | RequireAuthorizationAction | RequireLogoutAction;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export {ActionType};
export type {Actions, SwitchCityAction, SwitchSortAction, LoadOffersAction, ResetOffersAction, RequireAuthorizationAction, RequireLogoutAction, ThunkActionResult, ThunkAppDispatch};
