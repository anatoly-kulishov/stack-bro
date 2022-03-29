import { AppActionType } from '../../action-types/app-action-type';
import { COLOR_THEME } from '../../../constants/localStorage';
import { ColorThemes, Nullable } from '../../../types';
import { InferActionsTypes } from '../rootReducer';
import { actions } from '../../actions/appActions';

const initialState = {
  initialized: false,
  globalErrors: null as Nullable<string>,
  theme: (localStorage.getItem(COLOR_THEME) || 'light') as ColorThemes,
};

export type AppInitialStateType = typeof initialState;

// eslint-disable-next-line @typescript-eslint/default-param-last
export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
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
type ActionsType = InferActionsTypes<typeof actions>;
