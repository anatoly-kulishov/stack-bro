import {SIGN_IN} from "../types";
import {__accessToken__} from "../../constants";

const initialState = {
    token: window.localStorage[__accessToken__],
    isAuth: !!window.localStorage[__accessToken__]
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
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
