import { Nullable } from './index';

export type PostType = {
  id: number;
  message: Nullable<string>;
  likesCount: number;
};
