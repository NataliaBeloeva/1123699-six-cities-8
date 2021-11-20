const HTTP_STATUS_OK = 200;
const MAX_OFFER_IMAGES_COUNT = 6;
const MAX_REVIEWS_AMOUNT = 10;

enum AppRoute {
  Favorites = '/favorites',
  SignIn = '/login',
  Room = '/offer',
  Root = '/',
}

enum AuthStatus {
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
  Favorite ='FAVORITE',
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

enum ApiRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorites = '/favorite'
}

enum ServiceMessage {
  ServerFail = 'Server is not responding, please try again later',
  AuthFail = 'Do not forget to log in',
  LoginFail = 'Please make sure all fields are filled in correctly',
  PostReviewFail = 'Something went wrong while posting, please try again',
}

enum ReviewStatus {
  Uploading = 'UPLOADING',
  Uploaded = 'UPLOADED',
  NotUploaded = 'NOT_UPLOADED',
  Unknown = 'UNKNOWN',
}

enum CommentLength  {
  MIN = 50,
  MAX = 300,
}

export {HTTP_STATUS_OK, MAX_OFFER_IMAGES_COUNT, MAX_REVIEWS_AMOUNT, AppRoute, AuthStatus, MapType, CardType, City, SortType, ApiRoute, ServiceMessage, ReviewStatus, CommentLength};
