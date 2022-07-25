import { Nullable } from './index';

export interface IProfile {
  userId: Nullable<number>;
  lookingForAJob: boolean;
  lookingForAJobDescription: Nullable<string>;
  fullName: Nullable<string>;
  aboutMe: Nullable<string>;
  contacts: IProfileContacts;
  photos: IProfilePhotos;
}

export interface IProfilePhotos {
  small: Nullable<string>;
  large: Nullable<string>;
}

export interface IProfileContacts {
  key?: Nullable<string>;
  github: Nullable<string>;
  vk: Nullable<string>;
  facebook: Nullable<string>;
  instagram: Nullable<string>;
  twitter: Nullable<string>;
  website: Nullable<string>;
  youtube: Nullable<string>;
  mainLink: Nullable<string>;
}
