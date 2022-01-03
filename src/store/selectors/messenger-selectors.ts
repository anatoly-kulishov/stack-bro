import {AppStateType} from "../reducers/rootReducer";

export const getMessengerStatus = (state: AppStateType) => state.messenger.status;