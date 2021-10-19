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

export {AppRoute, AuthorizationStatus, MapType, CardType};
