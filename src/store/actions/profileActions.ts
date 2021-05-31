import axios from "axios";
import {ADD_POST, SET_USER_PROFILE} from "../types";
import {_apiBase, errorMessage} from "../../constants";

export function setProfile(userId: number) {
    return async (dispatch: any) => {
        try {
            axios.get(`${_apiBase}/profile/${userId}`)
                .then((res) => {
                    dispatch({
                        type: SET_USER_PROFILE,
                        profile: res.data
                    })
                })
                .catch((error) => console.log(error));
        } catch (e) {
            console.error(e)
        }
    }
}

export function addPost(post: object) {
    return async (dispatch: any) => {
        try {
            dispatch({
                type: ADD_POST,
                payload: post
            })
        } catch (e) {
            console.error(errorMessage)
        }
    }
}