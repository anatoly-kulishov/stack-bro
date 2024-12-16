import Cookies from 'js-cookie';
import { produce } from 'immer';

import { AuthActions } from '../../actions/auth-actions/auth-actions';
import { AuthActionType } from '../../action-types';
import { Nullable } from '../../../shared/types';

interface IAuthInitialState {
  isLoading: boolean;
  isValid: boolean;
  isAuth: boolean;
  error: Nullable<string[]>;
  userId: Nullable<number>;
  myProfile: Nullable<{
    id: Nullable<number>;
    login: Nullable<string>;
    email: Nullable<string>;
  }>;
  captchaUrl: Nullable<string>;
}

const initialState: IAuthInitialState = {
  isLoading: false,
  isValid: true,
  isAuth: Boolean(Cookies.get('token')) ?? false,
  error: null,
  userId: null,
  myProfile: {
    id: null,
    login: null,
    email: null,
  },
  captchaUrl: null,
};

export const authReducer = produce((state: IAuthInitialState, action: AuthActions): IAuthInitialState => {
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
