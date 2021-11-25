import {City, SortType} from '../../const';
import {switchCity, switchSort} from '../action';
import {appProcess} from './app-process';

describe('Reducer: appProcess', () => {

  it('without additional parameters should return initial state', () => {
    expect(appProcess(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        currentCity: City.Paris,
        currentSortOption: SortType.Popular,
      });
  });
  it('should switch current city to a given value', () => {
    const state = {
      currentCity: City.Paris,
      currentSortOption: SortType.Popular,
    };
    expect(appProcess(state, switchCity(City.Amsterdam)))
      .toEqual({
        currentCity: City.Amsterdam,
        currentSortOption: SortType.Popular,
      });
  });

  it('should switch current sort option to a given value', () => {
    const state = {
      currentCity: City.Paris,
      currentSortOption: SortType.Popular,
    };
    expect(appProcess(state, switchSort(SortType.PriceHighToLow)))
      .toEqual({
        currentCity: City.Paris,
        currentSortOption: SortType.PriceHighToLow,
      });
  });

});

