import {
    ADD_POST, SAVE_PROFILE_FAILED, NEW_PROFILE_PHOTO_SENDS,
    REMOVE_POST,
    SAVE_PHOTO_SUCCESS,
    SET_PROFILE_STATUS,
    SET_USER_PROFILE
} from "../types";
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
    }).catch((e) => console.log(e));
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
    }).catch((e) => console.log(e));
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
    }).catch((e) => console.log(e));
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

/**
 * Save Photo
 * @param file
 * @param setSubmitting
 */
export const savePhoto = (file: File, setSubmitting: Function) => (dispatch: Function) => {
    dispatch({type: NEW_PROFILE_PHOTO_SENDS})
    profileAPI.putPhoto(file).then(data => {
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos))
        }
        setSubmitting(false)
    }).catch((e) => {
        setSubmitting(false)
        console.error(e)
    });
}

/**
 * Save photo success
 * @param photos
 */
export const savePhotoSuccess = (photos: object) => (dispatch: Function) => {
    console.log('savePhotoSuccess')
    dispatch({
        type: SAVE_PHOTO_SUCCESS,
        photos
    })
}

export const saveProfile = (profile: object, setSubmitting: Function) => (dispatch: Function, getState: Function) => {
    const userId = getState().auth.userId;
    profileAPI.putProfile(profile).then(data => {
        console.log(data)
        if (data.resultCode === 0) {
            dispatch(setProfile(userId))
        } else {
            dispatch({
                type: SAVE_PROFILE_FAILED,
                error: data.messages
            })
        }
        setSubmitting(false)
    }).catch((e) => {
        dispatch({
            type: SAVE_PROFILE_FAILED,
            error: String(e)
        })
        console.log(e)
    });
}