import {v1} from "uuid";
import MessengerActionType from "../../action-types/messenger-action-type";
import {ChatMessageType} from "../../../types";

export type StatusMessageType = 'pending' | 'ready' | 'error';

const initialState = {
  messages: [] as ChatMessageType[],
  status: 'pending' as StatusMessageType
}

const messengerReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case MessengerActionType.MESSAGES_RECEIVED:
      return {
        ...state,
        messages: [...state.messages, ...action.payload.map((m: any) => ({
          ...m,
          id: v1()
        }))].filter((m, index, arr) => index >= arr.length - 100)
      }
    case MessengerActionType.MESSAGES_STATUS_CHANGED:
      return {
        ...state,
        status: action.payload
      }
    default:
      return state;
  }
}

export type InitialStateType = typeof initialState;
// type ActionsType = InferActionsTypes<typeof actions>;
export default messengerReducer;
