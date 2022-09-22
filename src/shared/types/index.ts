import React from 'react';

export type Nullable<T> = T | null;
export type Undetectable<T> = T | undefined;

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodesForCaptchaEnum {
  CaptchaIsRequired = 10,
}

export interface IBaseResponse {
  resultCode: ResultCodesEnum;
  messages: string[];
  data: {};
}

export interface IAPIResponseType<D = {}, RC = ResultCodesEnum> {
  data: D;
  resultCode: RC;
  messages: string[];
}

export interface IChildren {
  children?: React.ReactNode;
}
