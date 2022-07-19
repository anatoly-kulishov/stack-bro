import { PhotosType, PostType, ProfileType } from '../../../shared/types';
import { ProfileActionType } from '../../action-types';

export interface SetUserProfile {
  type: ProfileActionType.SET_USER_PROFILE;
  payload: ProfileType;
}

export interface SetOwnerProfile {
  type: ProfileActionType.SET_OWNER_PROFILE;
  payload: ProfileType;
}

export interface SetOwnerStatus {
  type: ProfileActionType.SET_OWNER_STATUS;
  payload: boolean;
}

export interface GetProfileStatus {
  type: ProfileActionType.GET_PROFILE_STATUS;
  status: string;
}

export interface SetProfileStatus {
  type: ProfileActionType.SET_PROFILE_STATUS;
}

export interface GetFollowingStatus {
  type: ProfileActionType.GET_FOLLOWING_STATUS;
  followStatus: boolean;
}

export interface NewProfilePhotoSends {
  type: ProfileActionType.NEW_PROFILE_PHOTO_SENDS;
}

export interface SavePhotoSuccess {
  type: ProfileActionType.SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
}

export interface SaveProfileSuccess {
  type: ProfileActionType.SAVE_PROFILE_SUCCESS;
}

export interface SaveProfileFailed {
  type: ProfileActionType.SAVE_PROFILE_FAILED;
  error: string[];
}

export interface ShowProfileLoader {
  type: ProfileActionType.SHOW_PROFILE_LOADER;
}

export interface AddPost {
  type: ProfileActionType.ADD_POST;
  payload: PostType;
}

export interface RemovePost {
  type: ProfileActionType.REMOVE_POST;
  postId: number;
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
