import {AppStateType} from "../reducers/rootReducer";

/*********************** Simple Selectors ***********************/
export const getMessages = (state: AppStateType) => state.dialogs.messages;

