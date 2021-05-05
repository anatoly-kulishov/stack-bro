import {ADD_DIALOG} from "../types";

const initialState = {
    dialogs: [],
    messages: [],
    loading: true
}

const messagesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_DIALOG:
            return {
                ...state,
                dialogs: [{...action.payload}, ...state.dialogs]
            }
        default:
            return state
    }
}

export default messagesReducer;