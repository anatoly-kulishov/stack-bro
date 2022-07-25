import { Nullable } from './index';

export interface IPost {
  id: number;
  message: Nullable<string>;
  likesCount: number;
}
