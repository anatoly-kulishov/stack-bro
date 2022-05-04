import { ProfileActionType } from '../../action-types';

export interface SetUserProfile {
  type: ProfileActionType.SET_USER_PROFILE;
  payload: any;
}

export interface SetOwnerProfile {
  type: ProfileActionType.SET_OWNER_PROFILE;
  payload: any;
}

export interface SetOwnerStatus {
  type: ProfileActionType.SET_OWNER_STATUS;
  payload: any;
}

export interface GetProfileStatus {
  type: ProfileActionType.GET_PROFILE_STATUS;
  status: any;
}

export interface SetProfileStatus {
  type: ProfileActionType.SET_PROFILE_STATUS;
  status: any;
}

export interface GetFollowingStatus {
  type: ProfileActionType.GET_FOLLOWING_STATUS;
  followStatus: any;
}

export interface NewProfilePhotoSends {
  type: ProfileActionType.NEW_PROFILE_PHOTO_SENDS;
}

export interface SavePhotoSuccess {
  type: ProfileActionType.SAVE_PHOTO_SUCCESS;
  photos: any;
}

export interface SaveProfileSuccess {
  type: ProfileActionType.SAVE_PROFILE_SUCCESS;
}

export interface SaveProfileFailed {
  type: ProfileActionType.SAVE_PROFILE_FAILED;
  error: any;
}

export interface ShowProfileLoader {
  type: ProfileActionType.SHOW_PROFILE_LOADER;
}

export interface AddPost {
  type: ProfileActionType.ADD_POST;
  payload: any;
}

export interface RemovePost {
  type: ProfileActionType.REMOVE_POST;
  postId: any;
}

export type ProfileActions =
  | SetUserProfile
  | SetOwnerProfile
  | SetOwnerStatus
  | GetProfileStatus
  | SetProfileStatus
  | GetFollowingStatus
  | NewProfilePhotoSends
  | SavePhotoSuccess
  | SaveProfileSuccess
  | SaveProfileFailed
  | ShowProfileLoader
  | AddPost
  | RemovePost;
