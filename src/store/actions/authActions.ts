import Cookies from 'js-cookie'
import authAPI from "../../api/authAPI";
import {AUTH_ME, AUTH_NOT_VALID, LOG_OUT, SIGN_IN} from "../types";

/**
 * Authorize on the service
 * @param profile
 * @param setSubmitting
 */
export function signIn(profile: object, setSubmitting: Function) {
    return (dispatch: Function) => {
        authAPI.postSignIn(profile).then(data => {
            if (data.resultCode === 0) {
                dispatch({
                    type: SIGN_IN,
                    userId: data.data.userId
                })
                dispatch(authMe())
            } else {
                dispatch({
                    type: AUTH_NOT_VALID,
                    error: data.messages
                })
            }
            setSubmitting(false)
        }).catch((e) => {
            console.log(e)
            setSubmitting(false)
        })
    }
}

/**
 * Is current user authorized
 */
export function authMe() {
    return (dispatch: Function) => {
        authAPI.getAuthMe().then(data => {
            // console.log(data)
            if (data.resultCode === 0) {
                dispatch({
                    type: AUTH_ME,
                    payload: data.data
                })
                Cookies.set('token', 'f37d2ed1-ea22-430c-8f01-d225540e907d')
            }
        }).catch((e) => console.log(e));
    }
}

/**
 * Unfollow requested user
 */
export function logOut() {
    return (dispatch: Function) => {
        authAPI.deleteLogOut().then(() => Cookies.remove('token'))
        dispatch({type: LOG_OUT})
    }
}