import {AuthorizationStatus} from '../const';
import {ActionType, SwitchCityAction, SwitchSortAction, LoadOffersAction, ResetOffersAction, RequireAuthorizationAction, RequireLogoutAction} from '../types/action';
import {Offers} from '../types/offer';

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

const requireLogout = (): RequireLogoutAction => ({
  type: ActionType.RequireLogout,
});

export {switchCity, switchSort, loadOffers, resetOffers, requireAuthorization, requireLogout};
