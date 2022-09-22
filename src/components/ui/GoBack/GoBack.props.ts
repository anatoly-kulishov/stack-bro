import { Nullable } from '../../../shared/types';

export interface IGoBack {
  title?: Nullable<string>;
  history: { goBack: () => void };
}
