import {ADD_DIALOG, SEND_MESSAGE} from "../store-types";

export const actions = {
    addDialog: (newDialog: object) => ({type: ADD_DIALOG, newDialog} as const),
    sendMessage: (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody} as const)
}

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
 * @param newMessageBody
 */
export const sendMessage = (newMessageBody: object) => (dispatch: Function) => {
    dispatch({
        type: SEND_MESSAGE,
        payload: newMessageBody
    })
}