import {ADD_DIALOG, SEND_MESSAGE} from "../store-types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../reducers/rootReducer";
import {Action} from "redux";

export const actions = {
    addDialog: (newDialog: object) => ({type: ADD_DIALOG, newDialog} as const),
    sendMessage: (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody} as const)
}

type ThunkType = ThunkAction<void, AppStateType, unknown, Action<any>>;
export type ProfileActionsTypes = null;

/**
 * Add new dialog
 * @param dialog
 */
export const addDialog = (dialog: object): ThunkType => {
    return (dispatch) => {
        dispatch({
            type: ADD_DIALOG,
            payload: dialog
        })
    }
}

/**
 * Add new Message
 * @param newMessageBody
 */
export const sendMessage = (newMessageBody: object): ThunkType => {
    return (dispatch) => {
        dispatch({
            type: SEND_MESSAGE,
            payload: newMessageBody
        })
    }
}