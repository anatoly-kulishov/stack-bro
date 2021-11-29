import {createSelector} from "reselect";
import {AppStateType} from "../reducers/rootReducer";
import {UserType} from "../../types";

/*********************** Simple Selectors ***********************/
export const getUsersSelector = (state: AppStateType): UserType[] => state.users.users;
export const getFriendsSelector = (state: AppStateType): UserType[] => state.users.friends;
export const getPageSize = (state: AppStateType) => state.users.pageSize;
export const getTotalUsersCount = (state: AppStateType) => state.users.totalUsersCount;
export const getCurrentPage = (state: AppStateType) => state.users.currentPage;
export const getFollowingInProgress = (state: AppStateType) => state.users.followingInProgress;
export const getUsersLoading = (state: AppStateType) => state.users.isLoading;
export const getUsersFilter = (state: AppStateType) => state.users.filter

/*********************** Super Selectors ***********************/
export const getUsers = createSelector(getUsersSelector,
  (users: UserType[]) => {
    return users.filter((user: UserType) => user)
  })

export const getFriends = createSelector(getFriendsSelector,
  (users: UserType[]) => {
    return users.filter((user: UserType) => user)
  })
