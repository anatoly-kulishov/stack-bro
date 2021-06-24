import {AUTH_ME, AUTH_NOT_VALID, LOG_OUT, SIGN_IN} from "../types";
import Cookies from 'js-cookie';

const initialState = {
    isLoading: true,
    isValid: true,
    error: null,
    isAuth: Cookies.get('token'),
    userId: null,
    myProfile: [],
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                isValid: true,
                userId: action.userId
            }
        case LOG_OUT:
            return {
                ...state,
                myProfile: [],
                isAuth: false,
                isLoading: false
            }
        case AUTH_ME:
            return {
                ...state,
                myProfile: action.payload,
                userId: action.payload.id,
                isAuth: true,
                isLoading: false
            }
        case AUTH_NOT_VALID:
            return {
                ...state,
                isValid: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default authReducer;
