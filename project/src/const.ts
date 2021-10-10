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

export {AppRoute, AuthorizationStatus};
