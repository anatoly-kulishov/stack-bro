import {ADD_POST, SET_USER_PROFILE} from "../types";
import profileAPI from "../../api/profileAPI";

export function setProfile(userId: number) {
    return (dispatch: any) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch({
                    type: SET_USER_PROFILE,
                    profile: data
                })
            })
            .catch((e) => console.log(e));
    }
}

export function addPost(post: object) {
    return (dispatch: any) => {
        try {
            dispatch({
                type: ADD_POST,
                payload: post
            })
        } catch (e) {
            console.error(e)
        }
    }
}