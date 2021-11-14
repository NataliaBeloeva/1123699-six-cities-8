import {createReducer} from '@reduxjs/toolkit';
import {OffersData} from '../../types/state';
import {loadOffer, loadOfferComplete, loadOfferError, loadOffers, loadOffersNearby} from '../action';

const initialState: OffersData = {
  offers: [],
  offer: null,
  offersNearby: [],
  isDataLoaded: false,
  isOfferLoading: false,
  isOfferError: false,
  isOffersNearbyLoaded: false,
};

const offersData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadOffer, (state, action) => {
      state.isOfferLoading = true;
      state.isOfferError = false;
    })
    .addCase(loadOfferComplete, (state, action) => {
      state.offer = action.payload;
      state.isOfferLoading = false;
    })
    .addCase(loadOfferError, (state, action) => {
      state.isOfferLoading = false;
      state.isOfferError = true;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
      state.isOffersNearbyLoaded = true;
    });
});

export {offersData};
