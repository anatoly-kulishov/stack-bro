import {AppStateType} from "../reducers/rootReducer";

export const getMessengerStatus = (state: AppStateType) => state.messenger.status;
export const getMessages = (state: AppStateType) => state.messenger.messages;
