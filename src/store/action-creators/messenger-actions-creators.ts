import {StatusMessageType} from "../reducers/messengerReducer/messengerReducer";
import MessengerActionType from "../action-types/messenger-action-type";
import {ChatMessageType} from "../../types";


export const messagesReceived = (messages: ChatMessageType[]) => ({
  type: MessengerActionType.MESSAGES_RECEIVED,
  payload: messages
})

export const statusChanged = (status: StatusMessageType) => ({
  type: MessengerActionType.MESSAGES_STATUS_CHANGED,
  payload: status
})