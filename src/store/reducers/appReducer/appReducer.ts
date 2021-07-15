import {INITIALIZED_SUCCESS} from "../../store-types";
import {InferActionsTypes} from "../rootReducer";
import {actions} from "../../actions/appActions";
import {Nullable} from "../../../types";

const initialState = {
    initialized: false,
    globalErrors: null as Nullable<string>
}

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
export default appReducer;