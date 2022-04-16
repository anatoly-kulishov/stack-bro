import { AppActionType } from '../../action-types/app-action-type';
import { Nullable } from '../../../types';
import { InferActionsTypes } from '../rootReducer';
import { actions } from '../../actions/appActions';

const initialState = {
  initialized: false,
  globalErrors: null as Nullable<string>,
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
    case AppActionType.INITIALIZED_FAILED:
      return {
        ...state,
        initialized: false,
        globalErrors: 'INITIALIZED_FAILED',
      };
    default:
      return state;
  }
};

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
