import {
    SET_USERS,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    GET_FOLLOWING_STATUS,
    TOGGLE_FOLLOW_UNFOLLOW, TOGGLE_IS_FOLLOWING_PROGRESS,
} from "../types";
import usersAPI from "../../api/usersAPI";

/**
 * Returns all (or only filtered by name with term parameter) users splitted by page
 * @param requestPage
 * @param pageSize
 */
export const setUsers = (requestPage: number, pageSize: number) => (dispatch: Function) => {
    usersAPI.requestUsers(requestPage, pageSize).then((data) => {
        dispatch({
            type: SET_USERS,
            users: data.items,
            totalUsersCount: data.totalCount
        })
    }).catch((e) => console.error(e));
}

/**
 * Set current page
 * @param pageNumber
 */
export const setCurrentPage = (pageNumber: number) => (dispatch: Function) => {
    dispatch({
        type: SET_CURRENT_PAGE,
        currentPage: pageNumber
    })
}

/**
 * Set total user count
 * @param totalUserCount
 */
export const setTotalUserCount = (totalUserCount: number) => (dispatch: Function) => {
    dispatch({
        type: SET_TOTAL_USERS_COUNT,
        totalUserCount: totalUserCount
    })
}

/**
 * Get following status current user
 * @param userId
 */
export const setCurrentUserFollower = (userId: number) => (dispatch: Function) => {
    usersAPI.getCurrentUserFollower(userId).then(() => {
        dispatch({
            type: GET_FOLLOWING_STATUS,
            userId: userId
        })
    }).catch((e) => console.error(e))
}

/**
 * Follow to user
 * @param userId
 */
export const userFollow = (userId: number) => (dispatch: Function) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.postUserFollow(userId).then(data => {
        if (!data.resultCode) {
            dispatch({
                type: TOGGLE_FOLLOW_UNFOLLOW,
                userId: userId
            })
        }
        dispatch(toggleFollowingProgress(false, userId))
    }).catch((e) => console.error(e))
}

/**
 * Unfollow to user
 * @param userId
 */
export const userUnfollow = (userId: number) => (dispatch: Function) => {
    usersAPI.deleteUserUnfollow(userId).then(data => {
        if (!data.resultCode) {
            dispatch(toggleFollowingProgress(false, userId))
            dispatch({
                type: TOGGLE_FOLLOW_UNFOLLOW,
                userId: userId
            })
        }
    }).catch((e) => console.error(e))
}

/**
 * Toggle Following Progress
 * @param followingInProgress
 * @param userId
 */
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number) => (dispatch: Function) => {
    dispatch({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        followingInProgress,
        userId
    })
}