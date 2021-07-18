import {AppStateType} from "../reducers/rootReducer";

/*********************** Simple Selectors ***********************/
export const getProfile = (state: AppStateType) => state.profile.profile;
export const getPosts = (state: AppStateType) => state.profile.posts;
export const getProfileStatus = (state: AppStateType) => state.profile.status;
export const getProfileIsLoading = (state: AppStateType) => state.profile.isLoading;
export const getProfileErrorText = (state: AppStateType) => state.profile.error;
export const getProfileFollowStatus = (state: AppStateType) => state.profile.followStatus;
export const getProfileIsOwnerStatus = (state: AppStateType) => state.profile.isOwner;
