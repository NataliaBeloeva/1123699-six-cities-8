import {AppRoute, AuthorizationStatus} from '../const';
import {ActionType, SwitchCityAction, SwitchSortAction, LoadOffersAction, ResetOffersAction, RequireAuthorizationAction, UserLogoutAction, UserLoginAction, RedirectToRouteAction} from '../types/action';
import {Offers} from '../types/offer';
import {User} from '../types/user';

const switchCity = (city: string): SwitchCityAction => ({
  type: ActionType.SwitchCity,
  payload: city,
});

const switchSort = (sortType: string): SwitchSortAction => ({
  type: ActionType.SwitchSort,
  payload: sortType,
});

const loadOffers = (offers: Offers): LoadOffersAction => ({
  type: ActionType.LoadOffers,
  payload: offers,
});

const resetOffers = (): ResetOffersAction => ({
  type: ActionType.ResetOffers,
});

const requireAuthorization = (authStatus: AuthorizationStatus): RequireAuthorizationAction => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
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

export {switchCity, switchSort, loadOffers, resetOffers, requireAuthorization, userLogin, userLogout, redirectToRoute};
