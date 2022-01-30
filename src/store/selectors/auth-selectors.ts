import { AppStateType } from '../reducers/rootReducer';

export const getAuthState = (state: AppStateType) => state.auth;
