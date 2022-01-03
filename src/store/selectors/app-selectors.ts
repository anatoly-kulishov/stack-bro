import {AppStateType} from "../reducers/rootReducer";

export const getAppTheme = (state: AppStateType) => state.app.theme;

