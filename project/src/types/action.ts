import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {AppRoute, AuthorizationStatus} from '../const';
import {Offers} from './offer';
import {State} from './state';
import {User} from './user';

enum ActionType {
  SwitchCity = 'main/switchCity',
  SwitchSort = 'main/switchSort',
  ResetOffers = 'app/reset',
  LoadOffers = 'data/loadOffers',
  RedirectToRoute = 'app/redirectToRoute',
  RequireAuthorization = 'user/requireAuthorization',
  UserLogin = 'user/login',
  UserLogout = 'user/userLogout',
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

type Actions = SwitchCityAction | SwitchSortAction | LoadOffersAction | ResetOffersAction | RequireAuthorizationAction | UserLogoutAction | UserLoginAction | RedirectToRouteAction;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export {ActionType};
export type {Actions, SwitchCityAction, SwitchSortAction, LoadOffersAction, ResetOffersAction, RequireAuthorizationAction, UserLogoutAction, UserLoginAction, ThunkActionResult, ThunkAppDispatch, RedirectToRouteAction};
