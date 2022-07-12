import { AppStateType } from '../reducers';

export const getAppState = (state: AppStateType) => state.app;
export const getAppGlobalErrors = (state: AppStateType) => state.app.globalErrors;
