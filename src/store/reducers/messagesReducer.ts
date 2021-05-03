import {CREATE_DIALOG} from "../types";

const initialState = {
    dialogs: [],
    messages: [],
    loading: true
}

const messagesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_DIALOG:
            return {
                ...state,
                // dialogs: state.dialogs.concat([action.payload])
            }
        default:
            return state
    }
}

export default messagesReducer;
