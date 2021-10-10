type User = {
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
  user: User;
};

type Reviews = Review[];

export type {Review, Reviews};
