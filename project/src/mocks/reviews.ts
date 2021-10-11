import {Reviews} from '../types/review';

const reviews: Reviews = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    reviewRating: 4.9,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-05-10T14:13:56.569Z',
    id: 2,
    reviewRating: 5,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 5,
      isPro: false,
      name: 'Kiten',
    },
  },
];

export {reviews};
