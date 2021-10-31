import {Token} from '../services/token';

type User = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: Token;
};

type UserFromServer = Omit<
  User,
  | 'avatarUrl'
  | 'isPro'
  > & {
  'avatar_url': string,
  'is_pro': boolean,
}

export type {User, UserFromServer};
