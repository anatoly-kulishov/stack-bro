import {FilterType} from "../reducers/usersReducer/usersReducer";
import UsersActionType from "../action-types/users-action-type";

export const toggleFollowingProgress = (followingInProgress: boolean, userId: number) => ({
  type: UsersActionType.TOGGLE_IS_FOLLOWING_PROGRESS,
  followingInProgress,
  userId
})

export const setCurrentPage = (pageNumber: number) => ({
  type: UsersActionType.SET_CURRENT_PAGE,
  currentPage: pageNumber
})

export const setTotalUserCount = (totalUserCount: number) => ({
  type: UsersActionType.SET_TOTAL_USERS_COUNT,
  totalUserCount: totalUserCount
})

export const toggleIsFetching = (isFetching: boolean) => ({
  type: UsersActionType.TOGGLE_IS_FETCHING_USERS,
  isFetching
})

export const setFilter = (filter: FilterType) => ({
  type: UsersActionType.SET_USERS_FILTER,
  payload: filter
})