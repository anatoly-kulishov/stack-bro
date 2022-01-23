import Cookies from 'js-cookie'
import {BaseThunkType, InferActionsTypes} from "../reducers/rootReducer";
import {Nullable, ResultCodes, ResultCodesForCaptcha} from "../../types";
import {updateOwnerProfile, updateProfile} from "./profileActions";
import AuthActionType from "../action-types/auth-action-type";
import securityAPI from "../../api/securityAPI.ts";
import authAPI from "../../api/authAPI";

export const actions = {
  getCaptchaUrlSuccess: (captchaUrl: string) => ({
    type: AuthActionType.GET_CAPTCHA_URL_SUCCESS,
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
          type: AuthActionType.SIGN_IN,
          userId: data.data.userId
        })
        dispatch(authMe());
      } else {
        if (data.resultCode === ResultCodesForCaptcha.CaptchaIsRequired) {
          dispatch(getCaptchaUrl());
        }
        dispatch({
          type: AuthActionType.AUTH_NOT_VALID,
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
          type: AuthActionType.AUTH_ME,
          payload: data.data
        })
        // @ts-ignore
        Cookies.set('token', String(data.data.id));
        // @ts-ignore
        dispatch(updateProfile(data.data.id))
        // @ts-ignore
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
    dispatch({type: AuthActionType.LOG_OUT})
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