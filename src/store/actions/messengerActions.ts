import {Dispatch} from "redux";
import {BaseThunkType, InferActionsTypes} from "../reducers/rootReducer";
import {ChatMessageType} from "../../types";
import {MESSAGES_RECEIVED} from "../store-types";
import messengerAPI from "../../api/messangerAPI.ts";

export const actions = {
    messagesReceived: (messages: ChatMessageType[]) => ({
        type: MESSAGES_RECEIVED,
        payload: messages
    } as const)
}

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages: ChatMessageType[]) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

export const startMessagesListening = (): ThunkType => {
    return async (dispatch: Dispatch) => {
        messengerAPI.start();
        messengerAPI.subscribe(newMessageHandlerCreator(dispatch));
    }
}

export const stopMessagesListening = (): ThunkType => {
    return async (dispatch: Dispatch) => {
        messengerAPI.unsubscribe(newMessageHandlerCreator(dispatch));
        messengerAPI.stop();
    }
}

export const sendMessage = (message: string): ThunkType => {
    return async (dispatch: Dispatch) => {
        messengerAPI.sendMessage(message)
    }
}

export type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<any>;