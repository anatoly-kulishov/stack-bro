import { PhotosType, PostType, ProfileType, ResultCodes } from '../../types';
import { ProfileActionType } from '../action-types';
import { profileAPI } from '../../api/profileAPI';
import { authMe } from './auth-actions-creators';

export const profileActions = {
  setProfile: (data: ProfileType[]) => ({
    type: ProfileActionType.SET_USER_PROFILE,
    payload: data,
  }),
  setOwnerProfile: (data: ProfileType[]) => ({
    type: ProfileActionType.SET_OWNER_PROFILE,
    payload: data,
  }),
  setOwnerStatus: (flag: boolean) => ({
    type: ProfileActionType.SET_OWNER_STATUS,
    payload: flag,
  }),
  savePhotoSuccess: (photos: PhotosType) => ({
    type: ProfileActionType.SAVE_PHOTO_SUCCESS,
    photos,
  }),
  getStatus: (data: string) => ({
    type: ProfileActionType.GET_PROFILE_STATUS,
    status: data,
  }),
  setStatus: (data: object) => ({
    type: ProfileActionType.SET_PROFILE_STATUS,
    status: data,
  }),
  sendNewPhoto: () => ({
    type: ProfileActionType.NEW_PROFILE_PHOTO_SENDS,
  }),
  showLoader: () => ({
    type: ProfileActionType.SHOW_PROFILE_LOADER,
  }),
  saveProfileFailed: (data: { messages: string[] }) => ({
    type: ProfileActionType.SAVE_PROFILE_FAILED,
    error: data.messages,
  }),
  addPost: (post: PostType) => ({
    type: ProfileActionType.ADD_POST,
    payload: post,
  }),
  removePost: (postId: number) => ({
    type: ProfileActionType.REMOVE_POST,
    postId,
  }),
};

/**
 * Returns user profile information
 * @param userId
 */
export const updateProfile = (userId: number) => {
  return async (dispatch: Function) => {
    dispatch(profileActions.showLoader());
    profileAPI
      .getProfile(userId)
      .then(data => {
        dispatch(profileActions.setProfile(data));
      })
      .catch(e => console.error(e));
  };
};

/**
 * Update owner profile
 * @param userId
 */
export const updateOwnerProfile = (userId: number) => {
  return async (dispatch: Function) => {
    profileAPI
      .getProfile(userId)
      .then(data => dispatch(profileActions.setOwnerProfile(data)))
      .catch(e => console.error(e));
  };
};

/**
 * Returns text status of requested user
 * @param userId
 */
export const getStatus = (userId: number) => {
  return async (dispatch: Function) => {
    profileAPI
      .getStatus(userId)
      .then(data => {
        dispatch(profileActions.getStatus(data));
      })
      .catch(e => console.error(e));
  };
};

/**
 * Update status for current authorized user
 * @param status
 */
export const setStatus = (status: string) => {
  return async (dispatch: Function) => {
    profileAPI
      .setStatus(status)
      .then(data => {
        if (data.resultCode === ResultCodes.Success) {
          dispatch(profileActions.setStatus(data));
        }
      })
      .catch(e => console.error(e));
  };
};

/**
 * Save Photo
 * @param file
 * @param setSubmitting
 */
export const savePhoto = (file: File, setSubmitting: Function) => {
  return async (dispatch: Function) => {
    dispatch(profileActions.sendNewPhoto());
    profileAPI
      .putPhoto(file)
      .then(data => {
        if (data.resultCode === ResultCodes.Success) {
          dispatch(profileActions.savePhotoSuccess(data.data.photos));
          dispatch(authMe());
        }
      })
      .catch(e => console.error(e))
      .finally(() => setSubmitting(false));
  };
};

/**
 * Save profile changes
 * @param profile
 * @param setSubmitting
 */
export const saveProfile = (profile: ProfileType, setSubmitting: Function) => {
  return (dispatch: Function, getState: Function) => {
    profileAPI
      .putProfile(profile)
      .then(data => {
        const { userId } = getState().auth;
        if (data.resultCode === ResultCodes.Success) {
          dispatch(updateProfile(userId));
        } else {
          dispatch(profileActions.saveProfileFailed(data));
        }
      })
      .catch(e => {
        dispatch(profileActions.saveProfileFailed(e));
        console.error(e);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
};
