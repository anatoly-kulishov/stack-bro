import produce from 'immer';

import { Nullable, PostType, ProfileType } from '../../../types';
import { ProfileActionType } from '../../action-types';
import { ProfileActions } from '../../actions/profile-action/profile-action';

const initialState = {
  isOwner: true,
  isLoading: true,
  isValid: true,
  error: null,
  posts: [] as PostType[],
  selectedProfile: {},
  ownerProfile: {} as ProfileType,
  profile: {} as ProfileType,
  status: '',
  followStatus: null as Nullable<boolean>,
};

export type ProfileInitialStateType = typeof initialState;

export const profileReducer = produce(
  (state: ProfileInitialStateType, action: ProfileActions): ProfileInitialStateType => {
    switch (action.type) {
      case ProfileActionType.SET_USER_PROFILE:
        state.profile = action.payload;
        state.isLoading = false;
        return state;
      case ProfileActionType.SET_OWNER_PROFILE:
        state.ownerProfile = action.payload;
        state.isLoading = false;
        return state;
      case ProfileActionType.SET_OWNER_STATUS:
        state.isOwner = action.payload;
        return state;
      case ProfileActionType.GET_PROFILE_STATUS:
        state.status = action.status;
        return state;
      case ProfileActionType.SET_PROFILE_STATUS:
        state.status = action.status.status;
        return state;
      case ProfileActionType.GET_FOLLOWING_STATUS:
        state.followStatus = action.followStatus;
        return state;
      case ProfileActionType.NEW_PROFILE_PHOTO_SENDS:
        state.isLoading = true;
        return state;
      case ProfileActionType.SAVE_PHOTO_SUCCESS:
        state.profile = { ...state.profile, photos: { ...action.photos } };
        state.isLoading = false;
        return state;
      case ProfileActionType.SAVE_PROFILE_SUCCESS:
        state.isValid = true;
        return state;
      case ProfileActionType.SAVE_PROFILE_FAILED:
        state.isValid = false;
        state.error = action.error;
        return state;
      case ProfileActionType.SHOW_PROFILE_LOADER:
        state.isLoading = true;
        return state;
      case ProfileActionType.ADD_POST:
        state.posts = [{ ...action.payload }, ...state.posts];
        return state;
      case ProfileActionType.REMOVE_POST:
        state.posts = state.posts.filter((p: any) => p.id !== action.postId);
        return state;
      default:
        return state;
    }
  },
  initialState,
);
