import {
  ADD_POST, SAVE_PROFILE_FAILED, NEW_PROFILE_PHOTO_SENDS,
  REMOVE_POST,
  SAVE_PHOTO_SUCCESS,
  SET_PROFILE_STATUS,
  SET_USER_PROFILE, SET_OWNER_PROFILE, SHOW_PROFILE_LOADER
} from "../store-types";
import profileAPI from "../../api/profileAPI";
import {BaseThunkType, InferActionsTypes} from "../reducers/rootReducer";
import {PhotosType, PostType, ProfileType, ResultCodes} from "../../types";
import {FormAction} from "redux-form";
import {authMe} from "./authActions";

export const profileActions = {
  setProfile: (data: Array<ProfileType>) => ({
    type: SET_USER_PROFILE,
    payload: data
  }),
  setOwnerProfile: (data: Array<ProfileType>) => ({
    type: SET_OWNER_PROFILE,
    payload: data
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
  showLoader: () => ({
    type: SHOW_PROFILE_LOADER
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
    dispatch(profileActions.showLoader());
    profileAPI.getProfile(userId).then(data => {
      dispatch(profileActions.setProfile(data))
    }).catch((e) => console.log(e));
  }
}

export const updateOwnerProfile = (userId: number): ThunkType => {
  return async (dispatch: Function) => {
    profileAPI.getProfile(userId).then(data => {
      dispatch(profileActions.setOwnerProfile(data))
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
      dispatch(profileActions.getStatus(data))
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
        dispatch(profileActions.updateStatus(data))
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
    dispatch(profileActions.sendNewPhoto())
    profileAPI.putPhoto(file).then(data => {
      if (data.resultCode === ResultCodes.Success) {
        dispatch(profileActions.savePhotoSuccess(data.data.photos))
        dispatch(authMe())
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
        dispatch(profileActions.saveProfileFailed(data))
      }
    }).catch((e) => {
      dispatch(profileActions.saveProfileFailed(e))
      console.log(e)
    }).finally(() => setSubmitting(false))
  }
}

export type ActionsTypes = InferActionsTypes<typeof profileActions>;
export type ThunkType = BaseThunkType<ActionsTypes | FormAction>;
