import {combineReducers} from 'redux';
import {appProcess} from './app-process/app-process';
import {favoritesData} from './favorites-data/favorites-data';
import {offersData} from './offers-data/offers-data';
import {reviewsProcess} from './reviews-process/reviews-process';
import {userProcess} from './user-process/user-process';

enum NameSpace {
  data = 'DATA',
  favorites = 'FAVORITES',
  app = 'APP',
  user = 'USER',
  reviews = 'REVIEWS',
}

const rootReducer = combineReducers({
  [NameSpace.data]: offersData,
  [NameSpace.favorites]: favoritesData,
  [NameSpace.app]: appProcess,
  [NameSpace.user]: userProcess,
  [NameSpace.reviews]: reviewsProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
export {NameSpace, rootReducer};
