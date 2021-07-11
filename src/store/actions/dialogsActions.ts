import {ADD_DIALOG, SEND_MESSAGE} from "../store-types";
import {InferActionsTypes} from "../reducers/rootReducer";
import {Nullable} from "../../types/generics-types";

export const actions = {
    addDialog: (newDialog: object) => ({type: ADD_DIALOG, newDialog} as const),
    sendMessage: (newMessageBody: { id: number, message: Nullable<string> }) => ({
        type: SEND_MESSAGE,
        newMessageBody
    } as const)
}

export type ActionsTypes = InferActionsTypes<typeof actions>;
// type ThunkType = BaseThunkType<ActionsTypes>;