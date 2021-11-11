import {createReducer} from '@reduxjs/toolkit';
import {City, SortType} from '../../const';
import {AppProcess} from '../../types/state';
import {switchCity, switchSort} from '../action';

const initialState: AppProcess = {
  currentCity: City.Paris,
  currentSortOption: SortType.Popular,
};

const appProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(switchCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(switchSort, (state, action) => {
      state.currentSortOption = action.payload;
    });
});

export {appProcess};
