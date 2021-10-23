import {State} from '../types/state';
import {offers} from '../mocks/offers';
import {Actions, ActionType} from '../types/action';

const initialState = {
  currentCity: 'Hamburg',
  offers: offers,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SwitchCity:
      return {...state, currentCity: action.payload};
    case ActionType.SwitchOffers:
      return {...state, offers: action.payload};
    case ActionType.ResetOffers:
      return {...initialState};
    default:
      return state;
  }
};

export {reducer};
