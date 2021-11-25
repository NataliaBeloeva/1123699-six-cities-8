import {City, SortType, AuthStatus, ReviewStatus} from '../const';

const fakeUserFromServer = {
  'avatar_url': 'img/avatar-angelina.jpg',
  email: 'lasttrain@gmail.com',
  id: 1,
  'is_pro': true,
  name: 'Natalie',
  token: 'secret',
};

const fakeUserFromAdapter = {
  avatarUrl: 'img/avatar-angelina.jpg',
  email: 'lasttrain@gmail.com',
  id: 1,
  isPro: true,
  name: 'Natalie',
  token: 'secret',
};

const fakeOffersFromServer = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      'avatar_url': 'img/1.png',
      id: 3,
      'is_pro': true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/1.png', 'img/2.png'],
    'is_favorite': false,
    'is_premium': false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    'max_adults': 4,
    'preview_image': 'img/1.png',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
];

const fakeOffersFromAdapter = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/1.png', 'img/2.png'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/1.png',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
];

const fakeFavoritesFromServer = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      'avatar_url': 'img/1.png',
      id: 3,
      'is_pro': true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/1.png', 'img/2.png'],
    'is_favorite': true,
    'is_premium': false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    'max_adults': 4,
    'preview_image': 'img/1.png',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
];

const fakeFavoritesFromAdapter = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/1.png', 'img/2.png'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/1.png',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
];


const fakeReviewsFromServer = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      'avatar_url': 'img/1.png',
      id: 4,
      'is_pro': false,
      name: 'Max',
    },
  },
];

const fakeReviewsFromAdapter = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/1.png',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
];

const storeAuth = {
  DATA: {
    offers: fakeOffersFromServer,
    offer: fakeOffersFromServer[0],
    offersNearby: fakeOffersFromServer,
    isDataLoaded: true,
    isOfferLoading: false,
    isOfferError: false,
    isOffersNearbyLoaded: true,
  },
  FAVORITES: {
    offersFavorite: fakeFavoritesFromServer,
    isOffersFavoriteLoaded: true,
  },
  APP: {
    currentCity: City.Paris,
    currentSortOption: SortType.Popular,
  },
  USER: {
    authStatus: AuthStatus.Auth,
    user: fakeUserFromServer,
  },
  REVIEWS: {
    reviews: fakeReviewsFromServer,
    isReviewsLoaded: true,
    reviewStatus: ReviewStatus.Unknown,
  },
};

const storeNoAuth = {
  DATA: {
    offers: fakeOffersFromServer,
    offer: fakeOffersFromServer[0],
    offersNearby: fakeOffersFromServer,
    isDataLoaded: true,
    isOfferLoading: false,
    isOfferError: false,
    isOffersNearbyLoaded: true,
  },
  FAVORITES: {
    offersFavorite: fakeFavoritesFromServer,
    isOffersFavoriteLoaded: false,
  },
  APP: {
    currentCity: City.Paris,
    currentSortOption: SortType.Popular,
  },
  USER: {
    authStatus: AuthStatus.NoAuth,
    user: null,
  },
  REVIEWS: {
    reviews: fakeReviewsFromServer,
    isReviewsLoaded: true,
    reviewStatus: ReviewStatus.Unknown,
  },
};

export {fakeUserFromServer, fakeUserFromAdapter, fakeOffersFromServer, fakeOffersFromAdapter, fakeFavoritesFromServer, fakeFavoritesFromAdapter, fakeReviewsFromServer, fakeReviewsFromAdapter, storeAuth, storeNoAuth};
