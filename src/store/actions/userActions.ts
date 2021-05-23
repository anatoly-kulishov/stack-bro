import axios from "axios";
import {_apiBase} from "../../constants";
import {USERS_FOLLOW, USERS_REQUEST} from "../types";

export function setUsers() {
    console.log(`setUsers()`);
    return async (dispatch: any) => {
        try {
            axios.get(`${_apiBase}/users`)
                .then((res) => {
                    dispatch({
                        type: USERS_REQUEST,
                        users: res.data.items
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