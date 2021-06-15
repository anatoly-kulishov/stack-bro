import {AUTH_ME, LOG_OUT, SIGN_IN} from "../types";
import Cookies from 'js-cookie';

const initialState = {
    isLoading: true,
    isDisabled: false,
    isAuth: false,
    userId: null,
    myProfile: [],
    token: Cookies.get('token') || null,
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                token: Cookies.get('token') || null,
                isLoading: true,
                isDisabled: true // Todo
            }
        case LOG_OUT:
            return {
                ...state,
                token: Cookies.get('token') || null,
            }
        case AUTH_ME:
            return {
                ...state,
                myProfile: action.payload,
                isAuth: true
            }
        default:
            return state;
    }
}

export default authReducer;
