import {City, SortType} from '../../const';
import {Actions, ActionType} from '../../types/action';
import {AppProcess} from '../../types/state';

const initialState: AppProcess = {
  currentCity: City.Paris,
  currentSortOption: SortType.Popular,
};

const appProcess = (state = initialState, action: Actions): AppProcess => {
  switch (action.type) {
    case ActionType.SwitchCity:
      return {...state, currentCity: action.payload};
    case ActionType.SwitchSort:
      return {...state, currentSortOption: action.payload};
    default:
      return state;
  }
};

export {appProcess};
