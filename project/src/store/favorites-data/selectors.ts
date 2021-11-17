import {Offers} from '../../types/offer';
import {State} from '../../types/state';
import {NameSpace} from '../root-reducer';

const getOffersFavorite = (state: State): Offers => state[NameSpace.favorites].offersFavorite;
const getIsOffersFavoriteLoaded = (state: State): boolean => state[NameSpace.favorites].isOffersFavoriteLoaded;


export {getOffersFavorite, getIsOffersFavoriteLoaded};
