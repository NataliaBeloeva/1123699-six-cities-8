import {ActionType, SwitchCityAction, SwitchOffersAction, ResetOffersAction} from '../types/action';
import {Offers} from '../types/offer';

const switchCity = (city: string): SwitchCityAction => ({
  type: ActionType.SwitchCity,
  payload: city,
});

const switchOffers = (offers: Offers): SwitchOffersAction => ({
  type: ActionType.SwitchOffers,
  payload: offers,
});

const resetOffers = (): ResetOffersAction => ({
  type: ActionType.ResetOffers,
});

export {switchCity, switchOffers, resetOffers};
