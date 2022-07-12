import { AppStateType } from '../reducers';

export const getAuthState = (state: AppStateType) => state.auth;
export const getAuthUserId = (state: AppStateType) => state.auth.userId;
