import { Nullable } from './index';

export type UserType = {
  id: number;
  name: string;
  photos: { small: Nullable<string>; large: Nullable<string> };
  status: string;
  followed: boolean;
};

export type UsersType = {
  items: UserType[];
  totalCount: number;
};

export type UserFilterType = {
  term: string;
  friend: boolean;
  pages?: number;
};
