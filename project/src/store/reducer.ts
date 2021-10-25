import {State} from '../types/state';
import {offers} from '../mocks/offers';
import {Actions, ActionType} from '../types/action';
import {City, SortType} from '../const';


const initialState = {
  currentCity: City.Paris,
  offers: offers,
  currentSortOption: SortType.Popular,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SwitchCity:
      return {...state, currentCity: action.payload};
    case ActionType.SwitchOffers:
      return {...state, offers: action.payload};
    case ActionType.SwitchSort:
      return {...state, currentSortOption: action.payload};
    case ActionType.ResetOffers:
      return {...initialState};
    default:
      return state;
  }
};

export {reducer};
