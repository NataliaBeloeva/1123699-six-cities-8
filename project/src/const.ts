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
  CITY = 'city',
  PROPERTY = 'property',
}

enum CardType {
  CITY = 'city',
  NEARBY ='nearby',
}

export {AppRoute, AuthorizationStatus, MapType, CardType};
