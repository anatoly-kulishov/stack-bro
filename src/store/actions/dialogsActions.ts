import {ADD_DIALOG, ADD_MESSAGE} from "../types";

/**
 * Add new dialog
 * @param dialog
 */
export const addDialog = (dialog: object) => (dispatch: Function) => {
    dispatch({
        type: ADD_DIALOG,
        payload: dialog
    })
}

/**
 * Add new Message
 * @param message
 */
export const addMessage = (message: object) => (dispatch: Function) => {
    dispatch({
        type: ADD_MESSAGE,
        payload: message
    })
}