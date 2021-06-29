import {INITIALIZED_SUCCESS} from "../types";

const initialState = {
    initialized: false,
    globalErrors: null // Todo: Catch All Errors width alert
}

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export default appReducer;
