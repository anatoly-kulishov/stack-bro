import axios from "axios";
import {_apiBase} from "../../constants";
import {USERS_FOLLOW, USERS_REQUEST} from "../types";

export function fetchUserData(id: number) {
    console.log(`selectUser(${id})`);
    return async (dispatch: any) => {
        try {
            axios.get(`${_apiBase}/joblinkusers/${id}`)
                .then((response) => {
                    const userData = response.data;
                    dispatch({
                        type: USERS_REQUEST,
                        users: userData
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