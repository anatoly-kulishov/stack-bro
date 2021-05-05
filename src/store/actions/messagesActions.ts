import {ADD_DIALOG} from "../types";
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