import {LOG_OUT, SIGN_IN} from "../types";
import Cookies from 'js-cookie';

const initialState = {
    token: Cookies.get('token') || null,
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                token: Cookies.get('token') || null,
            }
        case LOG_OUT:
            return {
                ...state,
                token: Cookies.get('token') || null,
            }
        default:
            return state;
    }
}

export default authReducer;
