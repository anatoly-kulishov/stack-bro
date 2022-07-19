import produce from 'immer';

import { AppActions } from '../../actions/app-actions/app-actions';
import { AppActionType } from '../../action-types';
import { Nullable } from '../../../shared/types';

export type AppInitialStateType = {
  initialized: boolean;
  globalErrors: Nullable<string>;
};

const initialState: AppInitialStateType = {
  initialized: false,
  globalErrors: null,
};

export const appReducer = produce((state: AppInitialStateType, action: AppActions): AppInitialStateType => {
  switch (action?.type) {
    case AppActionType.INITIALIZED_SUCCESS:
      state.initialized = true;
      return state;
    case AppActionType.INITIALIZED_FAILED:
      state.initialized = false;
      state.globalErrors = 'INITIALIZED_FAILED';
      return state;
    default:
      return state;
  }
}, initialState);
