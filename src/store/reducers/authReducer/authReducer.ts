import Cookies from 'js-cookie';

import { AuthActionType } from '../../action-types/auth-action-type';
import { Nullable } from '../../../types';

const initialState = {
  isLoading: false,
  isValid: true,
  isAuth: Boolean(Cookies.get('token')),
  error: null,
  userId: null as Nullable<number>,
  myProfile: {
    id: null as Nullable<string>,
    login: null as Nullable<string>,
    email: null as Nullable<string>,
  } as object | null,
  captchaUrl: null,
};

export const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case AuthActionType.SIGN_IN:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        isValid: true,
        userId: action.userId,
        captchaUrl: null,
      };
    case AuthActionType.LOG_OUT:
      return {
        ...state,
        myProfile: null,
        isAuth: false,
        isLoading: false,
      };
    case AuthActionType.AUTH_ME:
      return {
        ...state,
        myProfile: action.payload,
        userId: action.payload.id,
        isAuth: true,
        isLoading: false,
      };
    case AuthActionType.AUTH_NOT_VALID:
      return {
        ...state,
        isValid: false,
        error: action.error,
        isLoading: false,
      };
    case AuthActionType.GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.payload,
      };
    default:
      return state;
  }
};

export type InitialStateType = typeof initialState;
// type ActionsType = InferActionsTypes<typeof actions>;
