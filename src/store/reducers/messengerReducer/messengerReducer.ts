import produce from 'immer';
import { v1 } from 'uuid';

import { MessengerActions } from '../../actions/messenger-actions/messenger-actions';
import { ChatMessageType, MessageType } from '../../../types';
import { MessengerActionType } from '../../action-types';

export type StatusMessageType = 'pending' | 'ready' | 'error';

export type MessengerInitialStateType = {
  messages: ChatMessageType[];
  status: StatusMessageType;
};

const initialState: MessengerInitialStateType = {
  messages: [],
  status: 'pending',
};

export const messengerReducer = produce(
  (state: MessengerInitialStateType, action: MessengerActions): MessengerInitialStateType => {
    switch (action.type) {
      case MessengerActionType.MESSAGES_RECEIVED:
        return {
          ...state,
          messages: [
            ...state.messages,
            ...action.payload.map((m: MessageType) => ({
              ...m,
              id: v1(),
            })),
          ].filter((m, index, arr) => index >= arr.length - 100),
        };
      case MessengerActionType.MESSAGES_STATUS_CHANGED:
        state.status = action.payload;
        return state;
      default:
        return state;
    }
  },
  initialState,
);
