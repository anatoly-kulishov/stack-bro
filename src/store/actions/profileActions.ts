import {
    ADD_POST, SAVE_PROFILE_FAILED, NEW_PROFILE_PHOTO_SENDS,
    REMOVE_POST,
    SAVE_PHOTO_SUCCESS,
    SET_PROFILE_STATUS,
    SET_USER_PROFILE
} from "../store-types";
import profileAPI from "../../api/profileAPI";
import {BaseThunkType, InferActionsTypes} from "../reducers/rootReducer";
import {PhotosType, PostType, ProfileType, ResultCodes} from "../../types";
import {FormAction} from "redux-form";

export const actions = {
    setProfile: (data: Array<ProfileType>) => ({
        type: SET_USER_PROFILE,
        profile: data
    }),
    addPost: (post: PostType) => ({
        type: ADD_POST,
        payload: post
    } as const),
    removePost: (postId: number) => ({
        type: REMOVE_POST,
        postId
    } as const),
    savePhotoSuccess: (photos: PhotosType) => ({
        type: SAVE_PHOTO_SUCCESS,
        photos
    } as const),
    getStatus: (data: string) => ({
        type: SET_PROFILE_STATUS,
        status: data
    }),
    updateStatus: (data: object) => ({
        type: SET_PROFILE_STATUS,
        status: data
    }),
    sendNewPhoto: () => ({
        type: NEW_PROFILE_PHOTO_SENDS
    }),
    saveProfileFailed: (data: { messages: string[] }) => ({
        type: SAVE_PROFILE_FAILED,
        error: data.messages
    })
}


/**
 * Returns user profile information
 * @param userId
 */
export const updateProfile = (userId: number): ThunkType => {
    return async (dispatch: Function) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(actions.setProfile(data))
        }).catch((e) => console.log(e));
    }
}

/**
 * Returns text status of requested user
 * @param userId
 */
export const getStatus = (userId: number): ThunkType => {
    return async (dispatch: Function) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(actions.getStatus(data))
        }).catch((e) => console.log(e));
    }
}

/**
 * Update status for current authorized user
 * @param status
 */
export const updateStatus = (status: string): ThunkType => {
    return async (dispatch: Function) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === ResultCodes.Success) {
                console.log(data)
                dispatch(actions.updateStatus(data))
            }
        }).catch((e) => console.log(e));
    }
}

/**
 * Save Photo
 * @param file
 * @param setSubmitting
 */
export const savePhoto = (file: File, setSubmitting: Function): ThunkType => {
    return async (dispatch: Function) => {
        dispatch(actions.sendNewPhoto())
        profileAPI.putPhoto(file).then(data => {
            if (data.resultCode === ResultCodes.Success) {
                dispatch(actions.savePhotoSuccess(data.data.photos))
            }
        }).catch((e) => console.error(e)).finally(() => setSubmitting(false))
    }
}

/**
 * Save profile changes
 * @param profile
 * @param setSubmitting
 */
export const saveProfile = (profile: ProfileType, setSubmitting: Function) => {
    return (dispatch: Function, getState: Function) => {
        profileAPI.putProfile(profile).then(data => {
            const userId = getState().auth.userId;
            if (data.resultCode === ResultCodes.Success) {
                dispatch(updateProfile(userId))
            } else {
                dispatch(actions.saveProfileFailed(data))
            }
        }).catch((e) => {
            dispatch(actions.saveProfileFailed(e))
            console.log(e)
        }).finally(() => setSubmitting(false))
    }
}

export type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes | FormAction>;