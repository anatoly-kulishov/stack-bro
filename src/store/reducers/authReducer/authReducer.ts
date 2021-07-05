import {AUTH_ME, AUTH_NOT_VALID, GET_CAPTCHA_URL_SUCCESS, LOG_OUT, SIGN_IN} from "../../store-types";
import Cookies from 'js-cookie';

const initialState = {
    isLoading: true,
    isValid: true,
    error: null,
    isAuth: Boolean(Cookies.get('token')),
    userId: null,
    myProfile: null,
    captchaUrl: null // if null, then captcha is not required
}

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                isValid: true,
                userId: action.userId,
                captchaUrl: null
            }
        case LOG_OUT:
            return {
                ...state,
                myProfile: null,
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
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;
