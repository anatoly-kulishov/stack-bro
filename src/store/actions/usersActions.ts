import axios from "axios";
import {_apiBase, API_KEY} from "../../constants";
import {
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    USER_FOLLOW_OR_UNFOLLOW,
    USER_GET_FOLLOWING_STATUS,
    USERS_REQUEST
} from "../types";

export function setUsers(currentPage: number, pageSize: number) {
    console.log(`setUsers()`);
    return async (dispatch: any) => {
        try {
            axios.get(`${_apiBase}/users?page=${currentPage}&count=${pageSize}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": API_KEY
                }
            })
                .then((res) => {
                    dispatch({
                        type: USERS_REQUEST,
                        users: res.data.items,
                        totalUsersCount: res.data.totalCount
                    })
                })
                .catch((error) => console.log(error));
        } catch (e) {
            console.error(e)
        }
    }
}

export function getCurrentUserFollower(userId: number) {
    return (dispatch: Function) => {
        axios.get(`${_apiBase}/follow/${userId}`, {
            withCredentials: true,
            headers: {
                "API-KEY": API_KEY
            }
        })
            .then(res => {
                dispatch({
                    type: USER_GET_FOLLOWING_STATUS,
                    userId: userId
                })
            })
            .catch((e) => console.error(e))
    }
}


export function userFollow(userId: number) {
    return (dispatch: Function) => {
        axios.post(`${_apiBase}/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": API_KEY
            }
        })
            .then(res => {
                dispatch({
                    type: USER_FOLLOW_OR_UNFOLLOW,
                    userId: userId
                })
            })
            .catch((e) => console.error(e))
    }
}

export function userUnfollow(userId: number) {
    return (dispatch: Function) => {
        axios.delete(`${_apiBase}/follow/${userId}`, {
            withCredentials: true,
            headers: {
                "API-KEY": API_KEY
            }
        })
            .then(res => {
                dispatch({
                    type: USER_FOLLOW_OR_UNFOLLOW,
                    userId: userId
                })
            })
            .catch((e) => console.error(e))
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
    return async (dispatch: any) => {
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