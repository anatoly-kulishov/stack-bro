import {createSelector} from "reselect";
import {AppStateType} from "../reducers/rootReducer";
import {UserType} from "../../types";

/*********************** Simple Selectors ***********************/
export const getUsersSelector = (state: AppStateType): UserType[] => state.users.users;
export const getPageSize = (state: AppStateType) => state.users.pageSize;
export const getTotalUsersCount = (state: AppStateType) => state.users.totalUsersCount;
export const getCurrentPage = (state: AppStateType) => state.users.currentPage;
export const getFollowingInProgress = (state: AppStateType) => state.users.followingInProgress;
export const getIsLoading = (state: AppStateType) => state.users.isLoading;

/*********************** Super Selectors ***********************/
export const getUsers = createSelector(getUsersSelector,
    (users) => {
        return users.filter((user: object) => user)
    })