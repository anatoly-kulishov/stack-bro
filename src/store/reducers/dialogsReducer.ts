import {ADD_DIALOG, ADD_MESSAGE} from "../types";

const initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Anatoly'
        },
        {
            id: 2,
            name: 'Sergei'
        },
        {
            id: 3,
            name: 'Pavel'
        },
        {
            id: 4,
            name: 'Ivan'
        },
    ],
    messages: [
        {
            id: 1,
            message: 'Impedit neque qui voluptas?'
        },
        {
            id: 2,
            message: 'A consectetur dolores?'
        },
        {
            id: 3,
            message: 'Dolores qui voluptas?'
        }
    ],
    loading: true
}

const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_DIALOG:
            return {
                ...state,
                dialogs: [{...action.payload}, ...state.dialogs]
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [{...action.payload}, ...state.messages]
            }
        default:
            return state
    }
}

export default dialogsReducer;