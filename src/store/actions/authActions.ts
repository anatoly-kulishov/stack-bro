import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import Cookies from 'js-cookie'
import {AppStateType} from "../reducers/rootReducer";
import authAPI from "../../api/authAPI";
import securityAPI from "../../api/securityAPI.ts";
import {AUTH_ME, AUTH_NOT_VALID, GET_CAPTCHA_URL_SUCCESS, LOG_OUT, SIGN_IN} from "../store-types";
import {ResultCodes, ResultCodesForCaptcha} from "../../types/GeneralTypes";

type ThunkType = ThunkAction<void, AppStateType, unknown, Action>;
// export type ProfileActionsTypes = null;

/**
 * Authorize on the service
 * @param profile
 * @param setSubmitting
 * @param resetForm
 */
export type ProfileActionType = {
    email: string,
    password: string,
    captcha?: string,
    rememberMe?: boolean
}
export const signIn = (profile: ProfileActionType, setSubmitting: Function, resetForm: Function): ThunkType => {
    return (dispatch) => {
        authAPI.postSignIn(profile).then(data => {
            if (data.resultCode === ResultCodes.Success) {
                resetForm();
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
            setSubmitting(false);
        }).catch((e) => {
            console.log(e)
            setSubmitting(false)
        })
    }
}

/**
 * Is current user authorized
 */
export const authMe = (): ThunkType => {
    return (dispatch) => {
        authAPI.getAuthMe().then(data => {
            if (data.resultCode === ResultCodes.Success) {
                dispatch({
                    type: AUTH_ME,
                    payload: data.data
                })
                Cookies.set('token', 'f7245be5-e090-4424-a6bf-7942681a4b6d');
                return data.data.id;
            }
        }).catch((e) => console.log(e));
    }
}

/**
 * Unfollow requested user
 */
export const logOut = (): ThunkType => {
    return (dispatch) => {
        authAPI.deleteLogOut().then(() => Cookies.remove('token'))
        dispatch({type: LOG_OUT})
    }
}

/**
 * Get New Captcha
 */
export const getCaptchaUrl = (): ThunkType => {
    return (dispatch) => {
        securityAPI.getCaptcha().then(data => {
            dispatch(getCaptchaUrlSuccess(data.url));
        })
    }
}

/**
 * Get New Captcha Success
 */
export const getCaptchaUrlSuccess = (captchaUrl: string): ThunkType => {
    return (dispatch) => {
        dispatch({
            type: GET_CAPTCHA_URL_SUCCESS,
            payload: captchaUrl
        })
    }
}