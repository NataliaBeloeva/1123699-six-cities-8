import {fakeFavoritesFromAdapter} from '../../utils/mocks';
import {loadFavorites, updateFavorites} from '../action';
import {favoritesData} from './favorites-data';

describe('Reducer: favoritesData', () => {

  it('without additional parameters should return initial state', () => {
    expect(favoritesData(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        offersFavorite: [],
        isOffersFavoriteLoaded: false,
      });
  });
  it('should load favorites and set isOffersFavoriteLoaded to true', () => {
    const state = {
      offersFavorite: [],
      isOffersFavoriteLoaded: false,
    };
    expect(favoritesData(state, loadFavorites(fakeFavoritesFromAdapter)))
      .toEqual({
        offersFavorite: fakeFavoritesFromAdapter,
        isOffersFavoriteLoaded: true,
      });
  });

  it('should update favorites', () => {
    const state = {
      offersFavorite: fakeFavoritesFromAdapter,
      isOffersFavoriteLoaded: false,
    };
    expect(favoritesData(state, updateFavorites(fakeFavoritesFromAdapter[0])))
      .toEqual({
        offersFavorite: fakeFavoritesFromAdapter,
        isOffersFavoriteLoaded: false,
      });
  });

});
