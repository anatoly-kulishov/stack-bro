import { AppStateType } from '../reducers';

export const getAuthState = (state: AppStateType) => state.auth;
