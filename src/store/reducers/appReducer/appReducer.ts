import {CHANGE_THEME, INITIALIZED_SUCCESS} from "../../store-types";
// import {InferActionsTypes} from "../rootReducer";
// import {actions} from "../../actions/appActions";
import {Nullable} from "../../../types";
import {COLOR_THEME} from "../../../constants/localStorage";
import {ColorThemes} from "../../../types/enums";

const initialState = {
  initialized: false,
  globalErrors: null as Nullable<string>,
  theme: (localStorage.getItem(COLOR_THEME) || 'light') as ColorThemes
}

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload
      }
    default:
      return state
  }
}

export type InitialStateType = typeof initialState;
// type ActionsType = InferActionsTypes<typeof actions>;
export default appReducer;
