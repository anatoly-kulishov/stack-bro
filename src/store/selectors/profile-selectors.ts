import { AppStateType } from '../reducers';

export const getProfileState = (state: AppStateType) => state.profile;
export const getProfileInfo = (state: AppStateType) => state.profile.profile;
export const getProfileIsOwner = (state: AppStateType) => state.profile.isOwner;
export const getProfileOwnerInfo = (state: AppStateType) => state.profile.ownerProfile;
