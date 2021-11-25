import {fakeOffersFromAdapter} from '../../utils/mocks';
import {loadOffer, loadOffers, loadOfferComplete, loadOfferError, loadOffersNearby, updateOffers, updateOffersNearby, updateOffer, resetOffers} from '../action';
import {offersData} from './offers-data';

describe('Reducer: offersData', () => {

  it('without additional parameters should return initial state', () => {
    expect(offersData(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        offers: [],
        offer: null,
        offersNearby: [],
        isDataLoaded: false,
        isOfferLoading: false,
        isOfferError: false,
        isOffersNearbyLoaded: false,
      });
  });
  it('should load offers and set isDataLoaded to true', () => {
    const state = {
      offers: [],
      offer: null,
      offersNearby: [],
      isDataLoaded: false,
      isOfferLoading: false,
      isOfferError: false,
      isOffersNearbyLoaded: false,
    };
    expect(offersData(state, loadOffers(fakeOffersFromAdapter)))
      .toEqual({
        offers: fakeOffersFromAdapter,
        offer: null,
        offersNearby: [],
        isDataLoaded: true,
        isOfferLoading: false,
        isOfferError: false,
        isOffersNearbyLoaded: false,
      });
  });

  it('should set isOfferLoading to true and isOfferError to false', () => {
    const state = {
      offers: [],
      offer: null,
      offersNearby: [],
      isDataLoaded: false,
      isOfferLoading: false,
      isOfferError: false,
      isOffersNearbyLoaded: false,
    };
    expect(offersData(state, loadOffer()))
      .toEqual({
        offers: [],
        offer: null,
        offersNearby: [],
        isDataLoaded: false,
        isOfferLoading: true,
        isOfferError: false,
        isOffersNearbyLoaded: false,
      });
  });

  it('should load offer and set isOfferLoading to false', () => {
    const state = {
      offers: [],
      offer: null,
      offersNearby: [],
      isDataLoaded: false,
      isOfferLoading: true,
      isOfferError: false,
      isOffersNearbyLoaded: false,
    };
    expect(offersData(state, loadOfferComplete(fakeOffersFromAdapter[0])))
      .toEqual({
        offers: [],
        offer: fakeOffersFromAdapter[0],
        offersNearby: [],
        isDataLoaded: false,
        isOfferLoading: false,
        isOfferError: false,
        isOffersNearbyLoaded: false,
      });
  });

  it('should set isOfferLoading to false and isOfferError to true', () => {
    const state = {
      offers: [],
      offer: null,
      offersNearby: [],
      isDataLoaded: false,
      isOfferLoading: true,
      isOfferError: false,
      isOffersNearbyLoaded: false,
    };
    expect(offersData(state, loadOfferError()))
      .toEqual({
        offers: [],
        offer: null,
        offersNearby: [],
        isDataLoaded: false,
        isOfferLoading: false,
        isOfferError: true,
        isOffersNearbyLoaded: false,
      });
  });

  it('should load offersNearby and set isOffersNearbyLoaded to true', () => {
    const state = {
      offers: [],
      offer: null,
      offersNearby: [],
      isDataLoaded: false,
      isOfferLoading: false,
      isOfferError: false,
      isOffersNearbyLoaded: false,
    };
    expect(offersData(state, loadOffersNearby(fakeOffersFromAdapter)))
      .toEqual({
        offers: [],
        offer: null,
        offersNearby: fakeOffersFromAdapter,
        isDataLoaded: false,
        isOfferLoading: false,
        isOfferError: false,
        isOffersNearbyLoaded: true,
      });
  });

  it('should update offers', () => {
    const state = {
      offers: fakeOffersFromAdapter,
      offer: null,
      offersNearby: [],
      isDataLoaded: false,
      isOfferLoading: false,
      isOfferError: false,
      isOffersNearbyLoaded: false,
    };
    expect(offersData(state, updateOffers(fakeOffersFromAdapter[0])))
      .toEqual({
        offers: fakeOffersFromAdapter,
        offer: null,
        offersNearby: [],
        isDataLoaded: false,
        isOfferLoading: false,
        isOfferError: false,
        isOffersNearbyLoaded: false,
      });
  });

  it('should update offersNearby', () => {
    const state = {
      offers: [],
      offer: null,
      offersNearby: fakeOffersFromAdapter,
      isDataLoaded: false,
      isOfferLoading: false,
      isOfferError: false,
      isOffersNearbyLoaded: false,
    };
    expect(offersData(state, updateOffersNearby(fakeOffersFromAdapter[0])))
      .toEqual({
        offers: [],
        offer: null,
        offersNearby: fakeOffersFromAdapter,
        isDataLoaded: false,
        isOfferLoading: false,
        isOfferError: false,
        isOffersNearbyLoaded: false,
      });
  });

  it('should update offer', () => {
    const state = {
      offers: [],
      offer: null,
      offersNearby: [],
      isDataLoaded: false,
      isOfferLoading: false,
      isOfferError: false,
      isOffersNearbyLoaded: false,
    };
    expect(offersData(state, updateOffer(fakeOffersFromAdapter[0])))
      .toEqual({
        offers: [],
        offer: fakeOffersFromAdapter[0],
        offersNearby: [],
        isDataLoaded: false,
        isOfferLoading: false,
        isOfferError: false,
        isOffersNearbyLoaded: false,
      });
  });

  it('should reset favorite offers', () => {
    const state = {
      offers: fakeOffersFromAdapter,
      offer: fakeOffersFromAdapter[0],
      offersNearby: fakeOffersFromAdapter,
      isDataLoaded: false,
      isOfferLoading: false,
      isOfferError: false,
      isOffersNearbyLoaded: false,
    };
    expect(offersData(state, resetOffers()))
      .toEqual({
        offers: fakeOffersFromAdapter,
        offer: fakeOffersFromAdapter[0],
        offersNearby: fakeOffersFromAdapter,
        isDataLoaded: false,
        isOfferLoading: false,
        isOfferError: false,
        isOffersNearbyLoaded: false,
      });
  });
});
