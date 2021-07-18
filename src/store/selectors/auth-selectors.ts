import {AppStateType} from "../reducers/rootReducer";

export const getAuthIsValidAuth = (state: AppStateType) => state.auth.isValid;
export const getAuthCaptchaUrl = (state: AppStateType) => state.auth.captchaUrl;
export const getAuthErrorText = (state: AppStateType) =>  state.auth.error;
