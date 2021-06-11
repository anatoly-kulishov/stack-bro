import Cookies from 'js-cookie';
import authAPI from "../../api/authAPI";
import {AUTH_ME, LOG_OUT, SIGN_IN} from "../types";

/**
 * Login to profile
 * @param profile
 */
export function signIn(profile: object) {
    return (dispatch: Function) => {
        authAPI.postSignIn(profile).then(data => {
            const access_token = data.token;
            Cookies.set('token', access_token)
            dispatch({
                type: SIGN_IN,
                payload: access_token
            })
        }).catch((e) => console.log(e));
    }
}

/**
 * Is current user authorized
 */
export function authMe() {
    return (dispatch: Function) => {
        authAPI.getAuthMe().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch({
                    type: AUTH_ME,
                    data: {id, email, login}
                })
            }
        }).catch((e) => console.log(e));
    }
}

/**
 * Exit profile
 */
export function logOut() {
    return (dispatch: Function) => {
        Cookies.remove('token');
        dispatch({type: LOG_OUT})
    }
}