import {AppStateType} from "../reducers/rootReducer";

/*********************** Simple Selectors ***********************/
export const getProfile = (state: AppStateType) => state.profile.profile;
export const getPosts = (state: AppStateType) => state.profile.posts;
