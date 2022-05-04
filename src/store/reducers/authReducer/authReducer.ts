import Cookies from 'js-cookie';
import produce from 'immer';

import { AuthActions } from '../../actions/auth-actions/auth-actions';
import { AuthActionType } from '../../action-types';
import { Nullable } from '../../../types';

const initialState = {
  isLoading: false,
  isValid: true,
  isAuth: Boolean(Cookies.get('token')) ?? false,
  error: null,
  userId: null as Nullable<number>,
  myProfile: {
    id: null as Nullable<string>,
    login: null as Nullable<string>,
    email: null as Nullable<string>,
  } as object | null,
  captchaUrl: null,
};

export type AuthInitialStateType = typeof initialState;

export const authReducer = produce((state: AuthInitialStateType, action: AuthActions): AuthInitialStateType => {
  switch (action.type) {
    case AuthActionType.SIGN_IN:
      state.isAuth = true;
      state.isLoading = false;
      state.isValid = true;
      state.userId = action.userId;
      state.captchaUrl = null;
      return state;
    case AuthActionType.LOG_OUT_START:
      state.isLoading = true;
      return state;
    case AuthActionType.LOG_OUT_DENIED:
      state.isLoading = false;
      return state;
    case AuthActionType.LOG_OUT_ACCEPTED:
      state.myProfile = null;
      state.isAuth = false;
      state.isLoading = false;
      return state;
    case AuthActionType.AUTH_ME:
      state.myProfile = action.payload;
      state.userId = action.payload.id;
      state.isAuth = true;
      state.isLoading = false;
      return state;
    case AuthActionType.AUTH_NOT_VALID:
      state.isValid = false;
      state.error = action.error;
      state.isLoading = false;
      return state;
    case AuthActionType.GET_CAPTCHA_URL_SUCCESS:
      state.captchaUrl = action.payload;
      return state;
    default:
      return state;
  }
}, initialState);
