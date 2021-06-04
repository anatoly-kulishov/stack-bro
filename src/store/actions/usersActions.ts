import {
    SET_USERS,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    GET_FOLLOWING_STATUS,
    FOLLOW_UNFOLLOW, TOGGLE_IS_FOLLOWING_PROGRESS,
} from "../types";
import usersAPI from "../../api/usersAPI";

/**
 * Set all user
 * @param currentPage
 * @param pageSize
 */
export function setUsers(currentPage: number, pageSize: number) {
    return (dispatch: Function) => {
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch({
                type: SET_USERS,
                users: data.items,
                totalUsersCount: data.totalCount
            })
        }).catch((e) => console.error(e));
    }
}

/**
 * Set current page
 * @param pageNumber
 */
export function setCurrentPage(pageNumber: number) {
    return (dispatch: Function) => {
        dispatch({
            type: SET_CURRENT_PAGE,
            currentPage: pageNumber
        })
    }
}

/**
 * Set total user count
 * @param totalUserCount
 */
export function setTotalUserCount(totalUserCount: number) {
    return (dispatch: any) => {
        dispatch({
            type: SET_TOTAL_USERS_COUNT,
            totalUserCount: totalUserCount
        })
    }
}

/**
 * Get following status current user
 * @param userId
 */
export function setCurrentUserFollower(userId: number) {
    return (dispatch: Function) => {
        usersAPI.getCurrentUserFollower(userId).then(() => {
            dispatch({
                type: GET_FOLLOWING_STATUS,
                userId: userId
            })
        }).catch((e) => console.error(e))
    }
}

/**
 * Follow to user
 * @param userId
 */
export function userFollow(userId: number) {
    return (dispatch: Function) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.postUserFollow(userId).then(data => {
            if (!data.resultCode) {
                dispatch({
                    type: FOLLOW_UNFOLLOW,
                    userId: userId
                })
            }
            dispatch(toggleFollowingProgress(false, userId))
        }).catch((e) => console.error(e))
    }
}

/**
 * Unfollow to user
 * @param userId
 */
export function userUnfollow(userId: number) {
    return (dispatch: Function) => {
        usersAPI.deleteUserUnfollow(userId).then(data => {
            if (!data.resultCode) {
                dispatch(toggleFollowingProgress(false, userId))
                dispatch({
                    type: FOLLOW_UNFOLLOW,
                    userId: userId
                })
            }
            dispatch(toggleFollowingProgress(true, userId))
        }).catch((e) => console.error(e))
    }
}

/**
 * Toggle Following Progress
 * @param followingInProgress
 * @param userId
 */
export function toggleFollowingProgress(followingInProgress: boolean, userId: number) {
    return (dispatch: any) => {
        dispatch({
            type: TOGGLE_IS_FOLLOWING_PROGRESS,
            followingInProgress,
            userId,
        })
    }
}