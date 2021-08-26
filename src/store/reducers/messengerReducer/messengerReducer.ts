import {ChatMessageType} from "../../../types";
import {MESSAGES_RECEIVED} from "../../store-types";

const initialState = {
    messages: [] as ChatMessageType[]
}

const messengerReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case MESSAGES_RECEIVED:
            return {
                ...state,
                messages: [...state.messages, ...action.payload]
            }
        default:
            return state;
    }
}

export type InitialStateType = typeof initialState;
// type ActionsType = InferActionsTypes<typeof actions>;
export default messengerReducer;
