import {
    DISABLE_BUTTONS,
    ENABLE_BUTTONS,
    HIDE_ALERT,
    HIDE_LOADER,
    HIDE_MODAL,
    SHOW_ALERT,
    SHOW_LOADER,
    SHOW_MODAL
} from "../types";

const initialState = {
    loading: true,
    alert: false,
    disable: false,
    showModal: false,
}

const appReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SHOW_LOADER:
            return {
                ...state,
                loading: true
            }
        case HIDE_LOADER:
            return {
                ...state,
                loading: false
            }
        case SHOW_ALERT:
            return {
                ...state,
                alert: payload
            }
        case HIDE_ALERT:
            return {
                ...state,
                alert: null
            }
        case SHOW_MODAL:
            return {
                ...state,
                showModal: true
            }
        case HIDE_MODAL:
            return {
                ...state,
                showModal: false
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
