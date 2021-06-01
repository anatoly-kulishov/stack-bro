import axios from "axios";
import Cookies from 'js-cookie';
import {_apiBase} from "../../constants";
import {AUTH_ME, LOG_OUT, SIGN_IN} from "../types";

export function authMe() {
    return async (dispatch: any) => {
        try {
            axios.get(`${_apiBase}/auth/me`, {
                withCredentials: true
            })
                .then((res) => {
                    console.log(res.data)
                    if (res.data.resultCode === 0) {
                        const {id, email, login} = res.data.data;
                        dispatch({
                            type: AUTH_ME,
                            data: {id, email, login}
                        })
                    }
                })
                .catch(function (error) {
                    console.log(error)
                });
        } catch (e) {
            console.error(e)
        }
    };
}

// const token = Cookies.get('token');
// console.log(token)
// if (token) {
// axios.defaults.headers.common['Authorization'] = token;
// await dispatch(fetchUserData(1));
// some other code
// } else {
// else case code
// }

export function signIn(profile: object) {
    return async (dispatch: any) => {
        try {
            axios.post(`${_apiBase}/auth/login`, profile)
                .then((response) => {
                    const access_token = response.data.token;
                    Cookies.set('token', access_token)
                    dispatch({
                        type: SIGN_IN,
                        payload: access_token
                    })
                })
                .catch(function (error) {
                    console.log(error)
                });
        } catch (e) {
            console.error(e)
        }
    }
}

export function logOut() {
    Cookies.remove('token');
    return async (dispatch: any) => {
        console.log('logOut()');
        try {
            dispatch({type: LOG_OUT})
        } catch (e) {
            console.error(e)
        }
    }
}