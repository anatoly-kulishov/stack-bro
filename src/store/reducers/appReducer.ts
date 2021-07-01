import {INITIALIZED_SUCCESS} from "../store-types";
import {InferActionsTypes} from "./rootReducer";
import {actions} from "../actions/appActions";

const initialState = {
    initialized: false,
    globalErrors: null as string | null // Todo: Catch All Errors width alert
}

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export default appReducer;