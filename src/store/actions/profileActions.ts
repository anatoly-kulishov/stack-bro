import  {ADD_POST, REMOVE_POST, SET_PROFILE_STATUS, SET_USER_PROFILE} from "../types";
import profileAPI from "../../api/profileAPI";

/**
 * Returns user profile information
 * @param userId
 */
export const setProfile = (userId: number) => (dispatch: Function) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch({
            type: SET_USER_PROFILE,
            profile: data
        })
    }).catch((e) => console.error(e));
}

/**
 * Returns text status of requested user
 * @param userId
 */
export const getStatus = (userId: number) => (dispatch: Function) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch({
            type: SET_PROFILE_STATUS,
            status: data
        })
    }).catch((e) => console.error(e));
}

/**
 * Update status for current authorized user
 * @param status
 */
export const updateStatus = (status: string) => (dispatch: Function) => {
    profileAPI.updateStatus(status).then(data => {
        console.log(data)
        if (data.resultCode === 0) {
            dispatch({
                type: SET_PROFILE_STATUS,
                status
            })
        }
    }).catch((e) => console.error(e));
}

/**
 * Add new post
 * @param post
 */
export const addPost = (post: object) => {
    return {
        type: ADD_POST,
        payload: post
    }
}

/**
 * Delete post
 * @param postId
 */
export const removePost = (postId: number) => {
    return {
        type: REMOVE_POST,
        postId
    }
}