import Cookies from 'js-cookie'
import {BaseThunkType, InferActionsTypes} from "../reducers/rootReducer";
import authAPI from "../../api/authAPI";
import securityAPI from "../../api/securityAPI.ts";
import {AUTH_ME, AUTH_NOT_VALID, GET_CAPTCHA_URL_SUCCESS, LOG_OUT, SIGN_IN} from "../store-types";
import {Nullable, ResultCodes, ResultCodesForCaptcha} from "../../types";
import {updateOwnerProfile, updateProfile} from "./profileActions";

export const actions = {
  getCaptchaUrlSuccess: (captchaUrl: string) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: captchaUrl
  } as const)
}


export type ProfileActionType = {
  email: string,
  password: string,
  captcha?: string,
  rememberMe?: boolean
}

/**
 * Authorize on the service
 * @param profile
 * @param setSubmitting
 * @param resetForm
 */
export const signIn = (profile: ProfileActionType, setSubmitting: Nullable<Function> = null, resetForm: Nullable<Function> = null): ThunkType => {
  return async (dispatch: Function) => {
    authAPI.postSignIn(profile).then(data => {
      if (data.resultCode === ResultCodes.Success) {
        resetForm && resetForm();
        dispatch({
          type: SIGN_IN,
          userId: data.data.userId
        })
        dispatch(authMe());
      } else {
        if (data.resultCode === ResultCodesForCaptcha.CaptchaIsRequired) {
          dispatch(getCaptchaUrl());
        }
        dispatch({
          type: AUTH_NOT_VALID,
          error: data.messages
        })
      }
      setSubmitting && setSubmitting(false);
    }).catch((e) => {
      console.log(e)
      setSubmitting && setSubmitting(false)
    })
  }
}

/**
 * Is current user authorized
 */
export const authMe = (): ThunkType => {
  return async (dispatch: Function) => {
    authAPI.getAuthMe().then(data => {
      if (data.resultCode === ResultCodes.Success) {
        dispatch({
          type: AUTH_ME,
          payload: data.data
        })
        console.log(data)
        Cookies.set('token', String(data.data.id));
        dispatch(updateProfile(data.data.id))
        dispatch(updateOwnerProfile(data.data.id))
      }
    }).catch((e) => console.log(e));
  }
}

/**
 * Unfollow requested user
 */
export const logOut = (): ThunkType => {
  return async (dispatch: Function) => {
    authAPI.deleteLogOut().then(() => Cookies.remove('token'));
    dispatch({type: LOG_OUT})
  }
}

/**
 * Get New Captcha
 */
export const getCaptchaUrl = (): ThunkType => {
  return async (dispatch: Function) => {
    securityAPI.getCaptcha().then(data => {
      dispatch(actions.getCaptchaUrlSuccess(data.url));
    })
  }
}

export type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<any>;
