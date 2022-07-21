import { StatusMessageType } from '../../reducers/messengerReducer/messengerReducer';
import { ChatMessageTypeWithID } from '../../../shared/types/chat.types';
import { MessengerActionType } from '../../action-types';

export interface MessagesReceived {
  type: MessengerActionType.MESSAGES_RECEIVED;
  payload: ChatMessageTypeWithID[];
}

export interface MessagesStatusChanged {
  type: MessengerActionType.MESSAGES_STATUS_CHANGED;
  payload: StatusMessageType;
}

export type MessengerActions = MessagesReceived | MessagesStatusChanged;
