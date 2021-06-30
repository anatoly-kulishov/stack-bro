import {INITIALIZED_SUCCESS} from "../store-types";

const initialState = {
    initialized: false,
    globalErrors: null as string | null // Todo: Catch All Errors width alert
}

export type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: any): InitialStateType => {
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