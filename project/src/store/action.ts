import {ActionType, SwitchCityAction, SwitchOffersAction, SwitchSortAction, ResetOffersAction} from '../types/action';
import {Offers} from '../types/offer';

const switchCity = (city: string): SwitchCityAction => ({
  type: ActionType.SwitchCity,
  payload: city,
});

const switchOffers = (offers: Offers): SwitchOffersAction => ({
  type: ActionType.SwitchOffers,
  payload: offers,
});

const switchSort = (sortType: string): SwitchSortAction => ({
  type: ActionType.SwitchSort,
  payload: sortType,
});

const resetOffers = (): ResetOffersAction => ({
  type: ActionType.ResetOffers,
});

export {switchCity, switchOffers, resetOffers, switchSort};
