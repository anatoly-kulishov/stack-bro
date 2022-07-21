export type Nullable<T> = T | null;
export type Undetectable<T> = T | undefined;

export enum ResultCodes {
  Success = 0,
  Error = 1,
}

export enum ResultCodesForCaptcha {
  CaptchaIsRequired = 10,
}

export type BaseResponseType = {
  resultCode: ResultCodes;
  messages: string[];
  data: {};
};

export type APIResponseType<D = {}, RC = ResultCodes> = {
  data: D;
  resultCode: RC;
  messages: string[];
};
