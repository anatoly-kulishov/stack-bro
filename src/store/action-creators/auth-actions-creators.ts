import Cookies from 'js-cookie';

import { Nullable, ResultCodesEnum, ResultCodesForCaptchaEnum } from '../../shared/types';
import { updateOwnerProfile } from './profile-action-creators';
import { securityAPI } from '../../services/security.service';
import { authService } from '../../services/auth.service';
import { AuthActionType } from '../action-types';

export const authActions = {
  getCaptchaUrlSuccess: (captchaUrl: string) => ({
    type: AuthActionType.GET_CAPTCHA_URL_SUCCESS,
    payload: captchaUrl,
  }),
  logOutStart: () => ({
    type: AuthActionType.LOG_OUT_START,
  }),
  logOutAccepted: () => ({
    type: AuthActionType.LOG_OUT_ACCEPTED,
  }),
  logOutDenied: () => ({
    type: AuthActionType.LOG_OUT_DENIED,
  }),
};

export interface IProfileAction {
  email: string;
  password: string;
  captcha?: string;
  rememberMe?: boolean;
}

/**
 * Authorize on the service
 * @param profile
 * @param setSubmitting
 * @param resetForm
 */
export const signIn = (
  profile: IProfileAction,
  setSubmitting: Nullable<Function> = null,
  resetForm: Nullable<Function> = null,
) => {
  return async (dispatch: Function) => {
    authService
      .postSignIn(profile)
      .then(data => {
        if (data.resultCode === ResultCodesEnum.Success) {
          resetForm && resetForm();
          dispatch({
            type: AuthActionType.SIGN_IN,
            userId: data.data.userId,
          });
          dispatch(authMe());
        } else {
          if (data.resultCode === ResultCodesForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
          }
          dispatch({
            type: AuthActionType.AUTH_NOT_VALID,
            error: data.messages,
          });
        }
        setSubmitting && setSubmitting(false);
      })
      .catch(e => {
        console.error(e);
        setSubmitting && setSubmitting(false);
      });
  };
};

/**
 * Is current user authorized
 */
export const authMe = () => {
  return async (dispatch: Function) => {
    authService
      .getAuthMe()
      .then(data => {
        if (data.resultCode === ResultCodesEnum.Success) {
          dispatch({
            type: AuthActionType.AUTH_ME,
            payload: data.data,
          });
          Cookies.set('token', String(data.data.id));
          dispatch(updateOwnerProfile(data.data.id));
        }
      })
      .catch(e => console.error(e));
  };
};

/**
 * Unfollow requested user
 */
export const logOut = () => {
  return async (dispatch: Function) => {
    try {
      dispatch(authActions.logOutStart());
      await authService.deleteLogOut().then(() => Cookies.remove('token'));
      dispatch(authActions.logOutAccepted());
    } catch (e) {
      console.error(e);
      dispatch(authActions.logOutDenied());
    }
  };
};

/**
 * Get New Captcha
 */
export const getCaptchaUrl = () => {
  return async (dispatch: Function) => {
    securityAPI.getCaptcha().then(data => {
      dispatch(authActions.getCaptchaUrlSuccess(data.url));
    });
  };
};
