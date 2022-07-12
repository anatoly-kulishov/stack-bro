import { AppStateType } from '../reducers';

export const getMessengerState = (state: AppStateType) => state.messenger;
export const getMessengerStatus = (state: AppStateType) => state.messenger.status;
