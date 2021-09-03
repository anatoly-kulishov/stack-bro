import {Dispatch} from "redux";
import {BaseThunkType, InferActionsTypes} from "../reducers/rootReducer";
import {ChatMessageType} from "../../types";
import {MESSAGES_RECEIVED, MESSAGES_STATUS_CHANGED} from "../store-types";
import messengerAPI from "../../api/messangerAPI.ts";
import {StatusMessageType} from "../reducers/messengerReducer/messengerReducer";

export const actions = {
    messagesReceived: (messages: ChatMessageType[]) => ({
        type: MESSAGES_RECEIVED,
        payload: messages
    } as const),
    statusChanged: (status: StatusMessageType) => ({
        type: MESSAGES_STATUS_CHANGED,
        payload: status
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

let _statusChangedHandler: ((messages: StatusMessageType) => void) | null = null;
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = status => {
            dispatch(actions.statusChanged(status))
        }
    }
    return _statusChangedHandler
}

export const startMessagesListening = (): ThunkType => {
    return async (dispatch: Dispatch) => {
        messengerAPI.start();
        messengerAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch));
        messengerAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch));
    }
}

export const stopMessagesListening = (): ThunkType => {
    return async (dispatch: Dispatch) => {
        messengerAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch));
        messengerAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch));
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