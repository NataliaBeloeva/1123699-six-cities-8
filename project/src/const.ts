const MAX_OFFERS_NEARBY_COUNT = 3;
const AUTH_FAIL_MESSAGE = 'Do not forget to log in';
const LOGIN_FAIL_MESSAGE = 'Please make sure all fields are filled correctly';

enum AppRoute {
  Favorites = '/favorites',
  SignIn = '/login',
  Room = '/offer/:id',
  Root = '/',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum MapType {
  City = 'CITY',
  Property = 'PROPERTY',
}

enum CardType {
  City = 'CITY',
  Nearby ='NEARBY',
}

enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export {MAX_OFFERS_NEARBY_COUNT, AUTH_FAIL_MESSAGE, LOGIN_FAIL_MESSAGE, AppRoute, AuthorizationStatus, MapType, CardType, City, SortType, APIRoute};
