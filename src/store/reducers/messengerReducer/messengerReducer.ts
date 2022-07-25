import produce from 'immer';
import { v1 } from 'uuid';

import { IChatMessage, IChatMessageWithID } from '../../../shared/types/chat.types';
import { MessengerActions } from '../../actions/messenger-actions/messenger-actions';
import { MessengerActionType } from '../../action-types';

export type StatusMessageType = 'pending' | 'ready' | 'error';

interface IMessengerInitialState {
  messages: IChatMessageWithID[];
  status: StatusMessageType;
}

const initialState: IMessengerInitialState = {
  messages: [],
  status: 'pending',
};

export const messengerReducer = produce(
  (state: IMessengerInitialState, action: MessengerActions): IMessengerInitialState => {
    switch (action.type) {
      case MessengerActionType.MESSAGES_RECEIVED:
        return {
          ...state,
          messages: [
            ...state.messages,
            ...action.payload.map((m: IChatMessage) => ({
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
