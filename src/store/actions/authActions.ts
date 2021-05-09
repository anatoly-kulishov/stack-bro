import axios from "axios";
import Cookies from 'js-cookie';
import {_apiBase} from "../../constants";
import {LOG_OUT, SIGN_IN} from "../types";
import {fetchUserData} from "./userActions";

export function init() {
    console.log('init()')
    return async (dispatch: any) => {
        const token = Cookies.get('token');
        console.log(token)

        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            await dispatch(fetchUserData(1));
            // some other code
        } else {
            // else case code
        }
    };
}

export function signIn(profile: object) {
    return async (dispatch: any) => {
        try {
            axios.post(`${_apiBase}/signin/JoblinkUser`, profile)
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