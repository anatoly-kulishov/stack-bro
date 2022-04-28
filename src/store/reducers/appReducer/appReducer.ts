import produce from 'immer';

import { Nullable } from '../../../types';
import { AppActions } from '../../actions/app-actions/app-actions';
import { AppActionType } from '../../action-types';

const initialState = {
  initialized: false,
  globalErrors: null as Nullable<string>,
};

export type AppInitialStateType = typeof initialState;

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
