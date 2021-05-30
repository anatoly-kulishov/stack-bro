import axios from "axios";
import {_apiBase} from "../../constants";
import {SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, USERS_FOLLOW, USERS_REQUEST} from "../types";

export function setUsers(currentPage: number, pageSize: number) {
    console.log(`setUsers()`);
    return async (dispatch: any) => {
        try {
            axios.get(`${_apiBase}/users?page=${currentPage}&count=${pageSize}`)
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

export function userFollow(id: number) {
    return async (dispatch: any) => {
        try {
            dispatch({
                type: USERS_FOLLOW,
                userId: id
            })
        } catch (e) {
            console.error(e)
        }
    }
}

export function setCurrentPage(pageNumber: number) {
    return async (dispatch: any) => {
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