import {ADD_DIALOG, ADD_MESSAGE} from "../types";

/**
 * Add new dialog
 * @param dialog
 */
export function addDialog(dialog: object) {
    return (dispatch: Function) => {
        dispatch({
            type: ADD_DIALOG,
            payload: dialog
        })
    }
}

/**
 * Add new Message
 * @param message
 */
export function addMessage(message: object) {
    return (dispatch: Function) => {
        dispatch({
            type: ADD_MESSAGE,
            payload: message
        })
    }
}