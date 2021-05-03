import {SIGN_IN} from "../types";

const initialState = {
    token: window.localStorage.access_token,
    isAuth: !!window.localStorage.access_token
}

const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SIGN_IN:
            return {
                ...state,
                isAuth: !!window.localStorage.access_token,
                token: window.localStorage.access_token
            }
        default:
            return state;
    }
}

export default authReducer;
