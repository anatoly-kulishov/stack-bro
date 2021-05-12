import {ADD_DIALOG, ADD_MESSAGE} from "../types";
import {errorMessage} from "../../constants";

export function addDialog(dialog: object) {
    return async (dispatch: any) => {
        try {
            dispatch({
                type: ADD_DIALOG,
                payload: dialog
            })
        } catch (e) {
            console.error(errorMessage)
        }
    }
}

export function addMessage(message: object) {
    return async (dispatch: any) => {
        try {
            dispatch({
                type: ADD_MESSAGE,
                payload: message
            })
        } catch (e) {
            console.error(errorMessage)
        }
    }
}