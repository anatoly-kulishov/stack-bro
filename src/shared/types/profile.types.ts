import { Nullable } from './index';

export type ProfileType = {
  userId: Nullable<number>;
  lookingForAJob: boolean;
  lookingForAJobDescription: Nullable<string>;
  fullName: Nullable<string>;
  aboutMe: Nullable<string>;
  contacts: ProfileContactsType;
  photos: ProfilePhotosType;
};

export type ProfilePhotosType = {
  small: Nullable<string>;
  large: Nullable<string>;
};

export type ProfileContactsType = {
  key?: Nullable<string>;
  github: Nullable<string>;
  vk: Nullable<string>;
  facebook: Nullable<string>;
  instagram: Nullable<string>;
  twitter: Nullable<string>;
  website: Nullable<string>;
  youtube: Nullable<string>;
  mainLink: Nullable<string>;
};
