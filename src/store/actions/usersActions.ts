import {
    SET_USERS,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    GET_FOLLOWING_STATUS,
    TOGGLE_FOLLOW_UNFOLLOW, TOGGLE_IS_FOLLOWING_PROGRESS,
} from "../store-types";
import usersAPI from "../../api/usersAPI";

// export type InitialState = typeof initialState;
// export type FilterType = typeof initialState.filter;
// type ActionsTypes = InferActionsTypes<typeof actions>;
// type ThunkType = BaseThunkType<ActionsTypes>;

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

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}

/**
 * Set current page
 * @param pageNumber
 */
export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage: pageNumber
})

type SetTotalUserCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUserCount: number
}

/**
 * Set total user count
 * @param totalUserCount
 */
export const setTotalUserCount = (totalUserCount: number): SetTotalUserCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUserCount: totalUserCount
})

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

type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress: boolean,
    userId: number
}

/**
 * Toggle Following Progress
 * @param followingInProgress
 * @param userId
 */
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number): ToggleFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
})