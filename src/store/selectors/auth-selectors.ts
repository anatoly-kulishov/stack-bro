import {AppStateType} from "../reducers/rootReducer";

export const getAuthIsLoading = (state: AppStateType) => state.auth.isLoading;
export const getAuthIsValidAuth = (state: AppStateType) => state.auth.isValid;
export const getAuthCaptchaUrl = (state: AppStateType) => state.auth.captchaUrl;
export const getAuthErrorText = (state: AppStateType) =>  state.auth.error;
export const getAuthMyProfile = (state: AppStateType) => state.auth.myProfile;
export const getOwnerId = (state: AppStateType) => state.auth.userId;
