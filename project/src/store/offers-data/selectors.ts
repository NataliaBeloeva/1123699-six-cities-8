import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Offer, Offers} from '../../types/offer';

const getOffers = (state: State): Offers => state[NameSpace.data].offers;
const getOffer = (state: State): Offer | null => state[NameSpace.data].offer;
const getOffersNearby = (state: State): Offers => state[NameSpace.data].offersNearby;
const getIsDataLoaded = (state: State): boolean => state[NameSpace.data].isDataLoaded;
const getIsOfferLoading = (state: State): boolean => state[NameSpace.data].isOfferLoading;
const getIsOfferError = (state: State): boolean => state[NameSpace.data].isOfferError;
const getIsOffersNearbyLoaded = (state: State): boolean => state[NameSpace.data].isOffersNearbyLoaded;

export {getOffers, getOffer, getOffersNearby, getIsDataLoaded, getIsOfferLoading, getIsOfferError, getIsOffersNearbyLoaded};
