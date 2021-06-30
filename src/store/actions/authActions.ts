import Cookies from 'js-cookie'
import authAPI from "../../api/authAPI";
import securityAPI from "../../api/securityAPI.ts";
import {AUTH_ME, AUTH_NOT_VALID, GET_CAPTCHA_URL_SUCCESS, LOG_OUT, SIGN_IN} from "../store-types";

/**
 * Authorize on the service
 * @param profile
 * @param setSubmitting
 * @param resetForm
 */
export const signIn = (profile: object, setSubmitting: Function, resetForm: Function) => (dispatch: Function) => {
    authAPI.postSignIn(profile).then(data => {
        if (data.resultCode === 0) {
            resetForm();
            dispatch({
                type: SIGN_IN,
                userId: data.data.userId
            })
            dispatch(authMe());
        } else {
            if (data.resultCode === 10) {
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

/**
 * Is current user authorized
 */
export const authMe = () => (dispatch: Function) => {
    authAPI.getAuthMe().then(data => {
        if (data.resultCode === 0) {
            dispatch({
                type: AUTH_ME,
                payload: data.data
            })
            Cookies.set('token', 'f7245be5-e090-4424-a6bf-7942681a4b6d');
            return data.data.id;
        }
    }).catch((e) => console.log(e));
}

/**
 * Unfollow requested user
 */
export const logOut = () => (dispatch: Function) => {
    authAPI.deleteLogOut().then(() => Cookies.remove('token'))
    dispatch({type: LOG_OUT})
}

/**
 * Get New Captcha
 */
export const getCaptchaUrl = () => (dispatch: Function) => {
    securityAPI.getCaptcha().then(data => {
        dispatch(getCaptchaUrlSuccess(data.url));
    })
}

/**
 * Get New Captcha Success
 */
export const getCaptchaUrlSuccess = (captchaUrl: string | null) => (dispatch: Function) => {
    dispatch({
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: captchaUrl
    })
}