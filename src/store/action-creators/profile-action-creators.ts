import ProfileActionType from "../action-types/profile-action-type";
import {PhotosType, PostType, ProfileType} from "../../types";

export const setProfile = (data: Array<ProfileType>) => ({
  type: ProfileActionType.SET_USER_PROFILE,
  payload: data
})

export const setOwnerProfile = (data: Array<ProfileType>) => ({
  type: ProfileActionType.SET_OWNER_PROFILE,
  payload: data
})

export const setOwnerStatus = (flag: boolean) => ({
  type: ProfileActionType.SET_OWNER_STATUS,
  payload: flag
})

export const savePhotoSuccess = (photos: PhotosType) => ({
  type: ProfileActionType.SAVE_PHOTO_SUCCESS,
  photos
})

export const getStatus = (status: object) => ({
  type: ProfileActionType.GET_PROFILE_STATUS,
  status
})

export const updateStatus = (status: string) => ({
  type: ProfileActionType.SET_PROFILE_STATUS,
  status: status
})

export const sendNewPhoto = () => ({
  type: ProfileActionType.NEW_PROFILE_PHOTO_SENDS
})

export const showLoader = () => ({
  type: ProfileActionType.SHOW_PROFILE_LOADER
})

export const saveProfileFailed = (data: { messages: string[] }) => ({
  type: ProfileActionType.SAVE_PROFILE_FAILED,
  error: data.messages
})

export const addPost = (post: PostType) => ({
  type: ProfileActionType.ADD_POST,
  payload: post
})

export const removePost = (postId: number) => ({
  type: ProfileActionType.REMOVE_POST,
  postId
})