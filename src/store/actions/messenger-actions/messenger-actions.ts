import { StatusMessageType } from '../../reducers/messengerReducer/messengerReducer';
import { MessengerActionType } from '../../action-types';
import { ChatMessageType } from '../../../shared/types';

export interface MessagesReceived {
  type: MessengerActionType.MESSAGES_RECEIVED;
  payload: ChatMessageType[];
}

export interface MessagesStatusChanged {
  type: MessengerActionType.MESSAGES_STATUS_CHANGED;
  payload: StatusMessageType;
}

export type MessengerActions = MessagesReceived | MessagesStatusChanged;
