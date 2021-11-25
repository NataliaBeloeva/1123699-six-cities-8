import {combineReducers} from 'redux';
import {appProcess} from './app-process/app-process';
import {favoritesData} from './favorites-data/favorites-data';
import {offersData} from './offers-data/offers-data';
import {reviewsProcess} from './reviews-process/reviews-process';
import {userProcess} from './user-process/user-process';

enum NameSpace {
  Data = 'DATA',
  Favorites = 'FAVORITES',
  App = 'APP',
  User = 'USER',
  Reviews = 'REVIEWS',
}

const rootReducer = combineReducers({
  [NameSpace.Data]: offersData,
  [NameSpace.Favorites]: favoritesData,
  [NameSpace.App]: appProcess,
  [NameSpace.User]: userProcess,
  [NameSpace.Reviews]: reviewsProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
export {NameSpace, rootReducer};
