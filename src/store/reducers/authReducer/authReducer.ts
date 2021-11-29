import {AUTH_ME, AUTH_NOT_VALID, GET_CAPTCHA_URL_SUCCESS, LOG_OUT, SIGN_IN} from "../../store-types";
import Cookies from 'js-cookie';
import {Nullable} from "../../../types";

const initialState = {
  isLoading: true,
  isValid: true,
  isAuth: Boolean(Cookies.get('token')),
  error: null,
  userId: null as (Nullable<number>),
  myProfile: {
    id: null as (Nullable<string>),
    login: null as (Nullable<string>),
    email: null as (Nullable<string>)
  } as (object | null),
  captchaUrl: null
}

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        isValid: true,
        userId: action.userId,
        captchaUrl: null
      }
    case LOG_OUT:
      return {
        ...state,
        myProfile: null,
        isAuth: false,
        isLoading: false
      }
    case AUTH_ME:
      return {
        ...state,
        myProfile: action.payload,
        userId: action.payload.id,
        isAuth: true,
        isLoading: false
      }
    case AUTH_NOT_VALID:
      return {
        ...state,
        isValid: false,
        error: action.error
      }
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.payload
      }
    default:
      return state;
  }
}

export type InitialStateType = typeof initialState;
// type ActionsType = InferActionsTypes<typeof actions>;
export default authReducer;
