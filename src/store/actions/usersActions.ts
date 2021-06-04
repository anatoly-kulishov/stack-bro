import {
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    USER_FOLLOW_OR_UNFOLLOW,
    USER_GET_FOLLOWING_STATUS,
    USERS_REQUEST
} from "../types";
import usersAPI from "../../api/usersAPI";


export function setUsers(currentPage: number, pageSize: number) {
    return (dispatch: Function) => {
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            console.log(data.items)
            dispatch({
                type: USERS_REQUEST,
                users: data.items,
                totalUsersCount: data.totalCount
            })
        }).catch((e) => console.log(e));
    }
}

export function setCurrentUserFollower(userId: number) {
    return (dispatch: Function) => {
        usersAPI.getCurrentUserFollower(userId).then(() => {
            dispatch({
                type: USER_GET_FOLLOWING_STATUS,
                userId: userId
            })
        }).catch((e) => console.error(e))
    }
}

export function userFollow(userId: number) {
    return (dispatch: Function) => {
        usersAPI.postUserFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch({
                    type: USER_FOLLOW_OR_UNFOLLOW,
                    userId: userId
                })
            }
        }).catch((e) => console.error(e))
    }
}

export function userUnfollow(userId: number) {
    return (dispatch: Function) => {
        usersAPI.deleteUserUnfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch({
                    type: USER_FOLLOW_OR_UNFOLLOW,
                    userId: userId
                })
            }
        }).catch((e) => console.error(e))
    }
}

export function setCurrentPage(pageNumber: number) {
    return (dispatch: Function) => {
        try {
            dispatch({
                type: SET_CURRENT_PAGE,
                currentPage: pageNumber
            })
        } catch (e) {
            console.error(e)
        }
    }
}

export function setTotalUserCount(totalUserCount: number) {
    return (dispatch: any) => {
        try {
            dispatch({
                type: SET_TOTAL_USERS_COUNT,
                totalUserCount: totalUserCount
            })
        } catch (e) {
            console.error(e)
        }
    }
}