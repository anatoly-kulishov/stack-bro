import { StatusMessageType } from '../../reducers/messengerReducer/messengerReducer';
import { IChatMessageWithID } from '../../../shared/types/chat.types';
import { MessengerActionType } from '../../action-types';

export interface MessagesReceived {
  type: MessengerActionType.MESSAGES_RECEIVED;
  payload: IChatMessageWithID[];
}

export interface MessagesStatusChanged {
  type: MessengerActionType.MESSAGES_STATUS_CHANGED;
  payload: StatusMessageType;
}

export type MessengerActions = MessagesReceived | MessagesStatusChanged;
