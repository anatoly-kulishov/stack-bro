import {PhotosType, PostType, ProfileType} from "../../types";
import {
    ADD_POST, GET_PROFILE_STATUS, NEW_PROFILE_PHOTO_SENDS,
    REMOVE_POST,
    SAVE_PHOTO_SUCCESS, SAVE_PROFILE_FAILED,
    SET_OWNER_PROFILE, SET_OWNER_STATUS,
    SET_PROFILE_STATUS,
    SET_USER_PROFILE,
    SHOW_PROFILE_LOADER
} from "../store-types";

export const setProfile = (data: Array<ProfileType>) => ({
    type: SET_USER_PROFILE,
    payload: data
})

export const setOwnerProfile = (data: Array<ProfileType>) => ({
    type: SET_OWNER_PROFILE,
    payload: data
})

export const setOwnerStatus = (flag: boolean) => ({
    type: SET_OWNER_STATUS,
    payload: flag
})

export const addPost = (post: PostType) => ({
    type: ADD_POST,
    payload: post
})

export const removePost = (postId: number) => ({
    type: REMOVE_POST,
    postId
})

export const savePhotoSuccess = (photos: PhotosType) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
})

export const getStatus = (status: object) => ({
    type: GET_PROFILE_STATUS,
    status
})

export const updateStatus = (status: string) => ({
    type: SET_PROFILE_STATUS,
    status: status
})

export const sendNewPhoto = () => ({
    type: NEW_PROFILE_PHOTO_SENDS
})

export const showLoader = () => ({
    type: SHOW_PROFILE_LOADER
})

export const saveProfileFailed = (data: { messages: string[] }) => ({
    type: SAVE_PROFILE_FAILED,
    error: data.messages
})