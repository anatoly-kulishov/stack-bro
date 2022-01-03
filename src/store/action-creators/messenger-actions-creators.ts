import {MESSAGES_RECEIVED, MESSAGES_STATUS_CHANGED} from "../store-types";
import {ChatMessageType} from "../../types";
import {StatusMessageType} from "../reducers/messengerReducer/messengerReducer";

// Todo: Add Action for Typing!
export const messagesReceived = (messages: ChatMessageType[]) => ({
    type: MESSAGES_RECEIVED,
    payload: messages
})

export const statusChanged = (status: StatusMessageType) => ({
    type: MESSAGES_STATUS_CHANGED,
    payload: status
})