import { FormikErrors, FormikValues } from 'formik';

import { Nullable } from './index';

export interface IFormProps {
  onSubmit: Function;
  isValid?: Nullable<boolean>;
  captchaUrl?: Nullable<string>;
  errorsText?: Nullable<string[]>;
}

export type FormikErrorsType =
  | FormikErrors<FormikValues[string][number]>[]
  | string
  | string[]
  | FormikErrors<any>
  | undefined;
