import {AUTH_ME, LOG_OUT, SIGN_IN} from "../types";
import Cookies from 'js-cookie';

const initialState = {
    isAuth: false,
    userId: null,
    email: null,
    login: null,
    token: Cookies.get('token') || null,
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                token: Cookies.get('token') || null,
                isLoading: true
            }
        case LOG_OUT:
            return {
                ...state,
                token: Cookies.get('token') || null,
            }
        case AUTH_ME:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export default authReducer;
