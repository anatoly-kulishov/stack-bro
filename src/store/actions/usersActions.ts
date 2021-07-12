import {
    SET_USERS,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    GET_FOLLOWING_STATUS,
    TOGGLE_FOLLOW_UNFOLLOW, TOGGLE_IS_FOLLOWING_PROGRESS,
} from "../store-types";
import usersAPI from "../../api/usersAPI";
import {ResultCodes} from "../../types";
import {BaseThunkType, InferActionsTypes} from "../reducers/rootReducer";

export const actions = {
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        followingInProgress,
        userId
    } as const),
    setCurrentPage: (pageNumber: number) => ({
        type: SET_CURRENT_PAGE,
        currentPage: pageNumber
    } as const),
    setTotalUserCount: (totalUserCount: number) => ({
        type: SET_TOTAL_USERS_COUNT,
        totalUserCount: totalUserCount
    } as const)
}

/**
 * Returns all (or only filtered by name with term parameter) users splitted by page
 * @param requestPage
 * @param pageSize
 */
export const setUsers = (requestPage: number, pageSize: number): ThunkType => {
    return async (dispatch: Function) => {
        usersAPI.requestUsers(requestPage, pageSize).then(data => {
            dispatch({
                type: SET_USERS,
                users: data.items,
                totalUsersCount: data.totalCount
            })
        }).catch((e) => console.error(e));
    }
}

/**
 * Get following status current user
 * @param userId
 */
export const setCurrentUserFollower = (userId: number): ThunkType => {
    return async (dispatch: Function) => {
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
export const userFollow = (userId: number): ThunkType => {
    return async (dispatch: Function) => {
        dispatch(actions.toggleFollowingProgress(true, userId))
        usersAPI.postUserFollow(userId).then(data => {
            if (data.resultCode === ResultCodes.Success) {
                dispatch({
                    type: TOGGLE_FOLLOW_UNFOLLOW,
                    userId: userId
                })
            }
            dispatch(actions.toggleFollowingProgress(false, userId))
        }).catch((e) => console.error(e))
    }
}

/**
 * Unfollow to user
 * @param userId
 */
export const userUnfollow = (userId: number): ThunkType => {
    return async (dispatch: Function) => {
        usersAPI.deleteUserUnfollow(userId).then(data => {
            if (data.resultCode === ResultCodes.Success) {
                dispatch(actions.toggleFollowingProgress(false, userId))
                dispatch({
                    type: TOGGLE_FOLLOW_UNFOLLOW,
                    userId: userId
                })
            }
        }).catch((e) => console.error(e))
    }
}

export type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;