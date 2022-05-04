import { MessengerActionType } from '../../action-types';

export interface MessagesReceived {
  type: MessengerActionType.MESSAGES_RECEIVED;
  payload: any;
}

export interface MessagesStatusChanged {
  type: MessengerActionType.MESSAGES_STATUS_CHANGED;
  payload: any;
}

export type MessengerActions = MessagesReceived | MessagesStatusChanged;
