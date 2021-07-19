import {ADD_DIALOG, SEND_MESSAGE} from "../../store-types";

export type DialogType = {
    id: number,
    name: string
}

export type MessageType = {
    id: number,
    message: string,
    owner: boolean
}

const initialState = {
    isLoading: true,
    dialogs: [
        {
            id: 1,
            name: 'IT-KAMASUTRA'
        },
        {
            id: 2,
            name: 'HTML Academy'
        },
        {
            id: 3,
            name: 'IT BEARD'
        },
    ] as Array<DialogType>,
    messages: [
        {
            id: 1,
            message: 'I’m sorry but you suffer from a terminal illness and have only 10 to live.?',
            owner: false
        },
        {
            id: 2,
            message: 'Nine..',
            owner: false
        },
        {
            id: 3,
            message: 'What?!',
            owner: true
        },
        {
            id: 4,
            message: 'Eight..',
            owner: false
        }
    ] as Array<MessageType>
}

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_DIALOG:
            return {
                ...state,
                dialogs: [{...action.payload}, ...state.dialogs]
            }
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {...action.payload}]
            }
        default:
            return state
    }
}


export type InitialStateType = typeof initialState;
// type ActionsType = InferActionsTypes<typeof actions>;
export default dialogsReducer;