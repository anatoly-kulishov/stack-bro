import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {
    ADD_POST, SAVE_PROFILE_FAILED, NEW_PROFILE_PHOTO_SENDS,
    REMOVE_POST,
    SAVE_PHOTO_SUCCESS,
    SET_PROFILE_STATUS,
    SET_USER_PROFILE
} from "../store-types";
import profileAPI from "../../api/profileAPI";
import {AppStateType} from "../reducers/rootReducer";
import {ResultCodes} from "../../types/GeneralTypes";

export const actions = {}

type ThunkType = ThunkAction<void, AppStateType, unknown, Action>;
// export type ProfileActionsTypes = null;

/**
 * Returns user profile information
 * @param userId
 */
// type SetProfileActionType = {
//     type: typeof SET_USER_PROFILE,
//     profile: []
// }

export const setProfile = (userId: number): ThunkType => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch({
                type: SET_USER_PROFILE,
                profile: data
            })
        }).catch((e) => console.log(e));
    }
}

/**
 * Returns text status of requested user
 * @param userId
 */
// type GetStatusActionType = {
//     type: typeof SET_USER_PROFILE,
//     status: string
// }

export const getStatus = (userId: number): ThunkType => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch({
                type: SET_PROFILE_STATUS,
                status: data
            })
        }).catch((e) => console.log(e));
    }
}

/**
 * Update status for current authorized user
 * @param status
 */
// type UpdateStatusActionType = {
//     type: typeof SET_PROFILE_STATUS,
//     status: string
// }

export const updateStatus = (status: string): ThunkType => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === ResultCodes.Success) {
                dispatch({
                    type: SET_PROFILE_STATUS,
                    status
                })
            }
        }).catch((e) => console.log(e));
    }
}

/**
 * Add new post
 * @param post
 */
type AddPostActionType = {
    type: typeof ADD_POST,
    payload: object
}

export const addPost = (post: object): AddPostActionType => ({
    type: ADD_POST,
    payload: post
})

/**
 * Delete post
 * @param postId
 */
type DeletePostActionType = {
    type: typeof REMOVE_POST,
    postId: number
}

export const removePost = (postId: number): DeletePostActionType => ({
    type: REMOVE_POST,
    postId
})

/**
 * Save Photo
 * @param file
 * @param setSubmitting
 */
export const savePhoto = (file: File, setSubmitting: Function): ThunkType => {
    return (dispatch) => {
        dispatch({type: NEW_PROFILE_PHOTO_SENDS})
        profileAPI.putPhoto(file).then(data => {
            if (data.resultCode === ResultCodes.Success) {
                dispatch(savePhotoSuccess(data.data.photos))
            }
            setSubmitting(false)
        }).catch((e) => {
            setSubmitting(false)
            console.error(e)
        });
    }
}

/**
 * Save photo success
 * @param photos
 */
export const savePhotoSuccess = (photos: object): ThunkType => {
    return (dispatch) => {
        dispatch({
            type: SAVE_PHOTO_SUCCESS,
            photos
        })
    }
}

/**
 * Save profile changes
 * @param profile
 * @param setSubmitting
 */
export const saveProfile = (profile: object, setSubmitting: Function) => {
    return (dispatch: Function, getState: Function) => {
        const userId = getState().auth.userId;
        profileAPI.putProfile(profile).then(data => {
            console.log(data)
            if (data.resultCode === ResultCodes.Success) {
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
}