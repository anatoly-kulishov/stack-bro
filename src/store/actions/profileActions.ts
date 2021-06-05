import {ADD_POST, SET_USER_PROFILE} from "../types";
import profileAPI from "../../api/profileAPI";

/**
 * Returns user profile information
 * @param userId
 */
export function setProfile(userId: number) {
    return (dispatch: Function) => {
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

/**
 * Add new post
 * @param post
 */
export function addPost(post: object) {
    return (dispatch: Function) => {
        dispatch({
            type: ADD_POST,
            payload: post
        })
    }
}