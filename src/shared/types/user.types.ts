import { Nullable } from './index';

export interface IUsersType {
  items: IUserType[];
  totalCount: number;
}

export interface IUserType {
  id: number;
  name: string;
  photos: { small: Nullable<string>; large: Nullable<string> };
  status: string;
  followed: boolean;
}

export interface IUserFilter {
  term: string;
  friend: boolean;
  pages?: number;
}
