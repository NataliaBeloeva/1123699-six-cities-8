type Author = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

type Review = {
  comment: string;
  date: string;
  id: number;
  reviewRating: number;
  user: Author;
};

type Reviews = Review[];

export type {Review, Reviews};
