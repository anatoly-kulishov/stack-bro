import {MESSAGES_RECEIVED, MESSAGES_STATUS_CHANGED} from "../../store-types";
import {ChatMessageType} from "../../../types";
import {v1} from "uuid";

export type StatusMessageType = 'pending' | 'ready' | 'error';

const initialState = {
  messages: [] as ChatMessageType[],
  status: 'pending' as StatusMessageType
}

const messengerReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case MESSAGES_RECEIVED:
      return {
        ...state,
        messages: [...state.messages, ...action.payload.map((m: any) => ({
          ...m,
          id: v1()
        }))].filter((m, index, arr) => index >= arr.length - 100)
      }
    case
    MESSAGES_STATUS_CHANGED:
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
