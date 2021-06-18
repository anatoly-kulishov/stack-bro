import {createSelector} from "reselect";

/*********************** Simple Selectors ***********************/
export const getUsersSelector = (state: any) => state.users.users;
export const getPageSize = (state: any) => state.users.pageSize;
export const getTotalUsersCount = (state: any) => state.users.totalUsersCount;
export const getCurrentPage = (state: any) => state.users.currentPage;
export const getFollowingInProgress = (state: any) => state.users.followingInProgress;
export const getIsLoading = (state: any) => state.users.isLoading;

/*********************** Super Selectors ***********************/
export const getUsers = createSelector(
    [getUsersSelector],
    (users: []) => {
        return users.filter((el: any) => el)
    })