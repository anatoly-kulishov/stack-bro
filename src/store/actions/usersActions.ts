import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {
    SET_USERS,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    GET_FOLLOWING_STATUS,
    TOGGLE_FOLLOW_UNFOLLOW, TOGGLE_IS_FOLLOWING_PROGRESS,
} from "../store-types";
import usersAPI from "../../api/usersAPI";
import {AppStateType} from "../reducers/rootReducer";
import {ResultCodes} from "../../types/Types";

// export type InitialState = typeof initialState;
// export type FilterType = typeof initialState.filter;
// type ActionsTypes = InferActionsTypes<typeof actions>;
// type ThunkType = BaseThunkType<ActionsTypes>;

type ThunkType = ThunkAction<void, AppStateType, unknown, Action>;
// export type UsersActionsTypes = (
//     SetCurrentPageActionType
//     | SetTotalUserCountActionType
//     | ToggleFollowingProgressActionType
//     );

/**
 * Returns all (or only filtered by name with term parameter) users splitted by page
 * @param requestPage
 * @param pageSize
 */
// type SetUsersActionType = {
//     type: typeof SET_USERS,
//     users: any[],
//     totalUsersCount: number
// }

export const setUsers = (requestPage: number, pageSize: number): ThunkType => {
    return (dispatch) => {
        usersAPI.requestUsers(requestPage, pageSize).then((data) => {
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
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}

export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage: pageNumber
})

/**
 * Set total user count
 * @param totalUserCount
 */
type SetTotalUserCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUserCount: number
}

export const setTotalUserCount = (totalUserCount: number): SetTotalUserCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUserCount: totalUserCount
})

/**
 * Get following status current user
 * @param userId
 */
export const setCurrentUserFollower = (userId: number): ThunkType => {
    return (dispatch) => {
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
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.postUserFollow(userId).then(data => {
            if (data.resultCode === ResultCodes.Success) {
                dispatch({
                    type: TOGGLE_FOLLOW_UNFOLLOW,
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
export const userUnfollow = (userId: number): ThunkType => {
    return (dispatch) => {
        usersAPI.deleteUserUnfollow(userId).then(data => {
            if (data.resultCode === ResultCodes.Success) {
                dispatch(toggleFollowingProgress(false, userId))
                dispatch({
                    type: TOGGLE_FOLLOW_UNFOLLOW,
                    userId: userId
                })
            }
        }).catch((e) => console.error(e))
    }
}


/**
 * Toggle Following Progress
 * @param followingInProgress
 * @param userId
 */
type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress: boolean,
    userId: number
}

export const toggleFollowingProgress = (followingInProgress: boolean, userId: number): ToggleFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
})