import {Offers} from './offer';

enum ActionType {
  SwitchCity = 'offers/switchCity',
  SwitchOffers = 'offers/switchOffers',
  SwitchSort = 'offers/switchSort',
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

type SwitchSortAction = {
  type: ActionType.SwitchSort;
  payload: string;
};

type ResetOffersAction = {
  type: ActionType.ResetOffers;
};

type Actions = SwitchCityAction | SwitchOffersAction | ResetOffersAction | SwitchSortAction;

export {ActionType};
export type {Actions, SwitchCityAction, SwitchOffersAction, ResetOffersAction, SwitchSortAction};
