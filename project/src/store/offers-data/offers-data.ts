import {Actions, ActionType} from '../../types/action';
import {OffersData} from '../../types/state';

const initialState: OffersData = {
  offers: [],
  offer: null,
  offersNearby: [],
  isDataLoaded: false,
  isOfferLoading: false,
  isOfferError: false,
  isOffersNearbyLoaded: false,
};

const offersData = (state = initialState, action: Actions): OffersData => {
  switch (action.type) {
    case ActionType.LoadOffers:
      return {...state, offers: action.payload, isDataLoaded: true};
    case ActionType.LoadOffer:
      return {...state, isOfferLoading: true, isOfferError: false};
    case ActionType.LoadOfferComplete:
      return {...state, offer: action.payload, isOfferLoading: false};
    case ActionType.LoadOfferError:
      return {...state, isOfferLoading: false, isOfferError: true};
    case ActionType.LoadOffersNearby:
      return {...state, offersNearby: action.payload, isOffersNearbyLoaded: true};
    default:
      return state;
  }
};

export {offersData};
