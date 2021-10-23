import {Offers} from './offer';

enum ActionType {
  SwitchCity = 'offers/switchCity',
  SwitchOffers = 'offers/switchOffers',
  ResetOffers = 'offers/reset',
}

type SwitchCityAction = {
  type: ActionType.SwitchCity;
  payload: string;
};

type SwitchOffersAction = {
  type: ActionType.SwitchOffers;
  payload: Offers;
};

type ResetOffersAction = {
  type: ActionType.ResetOffers;
};

type Actions = SwitchCityAction | SwitchOffersAction | ResetOffersAction;

export {ActionType};
export type {Actions, SwitchCityAction, SwitchOffersAction, ResetOffersAction};
