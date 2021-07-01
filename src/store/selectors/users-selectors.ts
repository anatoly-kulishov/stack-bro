import {createSelector} from "reselect";
import {AppStateType} from "../reducers/rootReducer";

/*********************** Simple Selectors ***********************/
export const getUsersSelector = (state: AppStateType): any => state.users.users;
export const getPageSize = (state: AppStateType): any => state.users.pageSize;
export const getTotalUsersCount = (state: AppStateType): any => state.users.totalUsersCount;
export const getCurrentPage = (state: AppStateType): any => state.users.currentPage;
export const getFollowingInProgress = (state: AppStateType): any => state.users.followingInProgress;
export const getIsLoading = (state: AppStateType): any => state.users.isLoading;

/*********************** Super Selectors ***********************/
export const getUsers = createSelector(
    [getUsersSelector],
    (users: []) => {
        return users.filter((user: object) => user)
    })