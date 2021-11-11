import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {City, SortType} from '../../const';

const getCurrentCity = (state: State): City => state[NameSpace.app].currentCity;
const getCurrentSortOption = (state: State): SortType => state[NameSpace.app].currentSortOption;

export {getCurrentCity, getCurrentSortOption};
