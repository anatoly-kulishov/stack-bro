import {USER_REQUEST} from "../types";

const initialState = {
    loading: true,
    currentUser: []
}

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                currentUser: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export default userReducer;
