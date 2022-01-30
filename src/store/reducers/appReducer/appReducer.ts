import { AppActionType } from '../../action-types/app-action-type';
import { COLOR_THEME } from '../../../constants/localStorage';
import { ColorThemes, Nullable } from '../../../types';

const initialState = {
  initialized: false,
  globalErrors: null as Nullable<string>,
  theme: (localStorage.getItem(COLOR_THEME) || 'light') as ColorThemes,
  spinnerSize: '50px',
};

export const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case AppActionType.INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    case AppActionType.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export type InitialStateType = typeof initialState;
// type ActionsType = InferActionsTypes<typeof actions>;
