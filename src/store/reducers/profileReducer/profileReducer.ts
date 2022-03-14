import { ProfileActionType } from '../../action-types/profile-action-type';
import { Nullable, PostType, ProfileType } from '../../../types';

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

export const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ProfileActionType.SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
        isLoading: false,
      };
    case ProfileActionType.SET_OWNER_PROFILE:
      return {
        ...state,
        ownerProfile: action.payload,
        isLoading: false,
      };
    case ProfileActionType.SET_OWNER_STATUS:
      return {
        ...state,
        isOwner: action.payload,
      };
    case ProfileActionType.GET_PROFILE_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case ProfileActionType.SET_PROFILE_STATUS:
      return {
        ...state,
        status: action.status.status,
      };
    case ProfileActionType.GET_FOLLOWING_STATUS:
      return {
        ...state,
        followStatus: action.followStatus,
      };
    case ProfileActionType.NEW_PROFILE_PHOTO_SENDS:
      return {
        ...state,
        isLoading: true,
      };
    case ProfileActionType.SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: { ...action.photos } },
        isLoading: false,
      };
    case ProfileActionType.SAVE_PROFILE_SUCCESS:
      return {
        ...state,
        isValid: true,
      };
    case ProfileActionType.SAVE_PROFILE_FAILED:
      return {
        ...state,
        isValid: false,
        error: action.error,
      };
    case ProfileActionType.SHOW_PROFILE_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case ProfileActionType.ADD_POST:
      return {
        ...state,
        posts: [{ ...action.payload }, ...state.posts],
      };
    case ProfileActionType.REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((p: any) => p.id !== action.postId),
      };
    default:
      return state;
  }
};

export type InitialStateType = typeof initialState;
// type ActionsType = InferActionsTypes<typeof actions>;
