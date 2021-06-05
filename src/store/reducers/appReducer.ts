import {DISABLE_BUTTONS, ENABLE_BUTTONS, HIDE_LOADER, SHOW_LOADER,} from "../types";

const initialState = {
    isLoading: true,
    disable: false
}

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                ...state,
                isLoading: true
            }
        case HIDE_LOADER:
            return {
                ...state,
                isLoading: false
            }
        case ENABLE_BUTTONS:
            return {
                ...state,
                disable: false
            }
        case DISABLE_BUTTONS:
            return {
                ...state,
                disable: true
            }
        default:
            return state
    }
}

export default appReducer;
