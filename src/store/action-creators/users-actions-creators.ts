import {
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS_FILTER,
    TOGGLE_IS_FETCHING_USERS,
    TOGGLE_IS_FOLLOWING_PROGRESS
} from "../store-types";
import {FilterType} from "../reducers/usersReducer/usersReducer";

// Todo: Add Action for Typing!
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
})

export const setCurrentPage = (pageNumber: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage: pageNumber
})

export const setTotalUserCount = (totalUserCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUserCount: totalUserCount
})

export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING_USERS,
    isFetching
})

export const setFilter = (filter: FilterType) => ({
    type: SET_USERS_FILTER,
    payload: filter
})