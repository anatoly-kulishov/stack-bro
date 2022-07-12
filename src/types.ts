export type Nullable<T> = T | null;
export type Undetectable<T> = T | undefined;

export enum AppRoutesEnum {
  HOME = '/',
  USERS = 'users',
  SOME_USER = ':userId',
  MESSENGER = 'messenger',
  HELP = 'help',
  GAME = 'game',
}

export enum AppRouteKeys {
  MY_PROFILE = 'MyProfile',
  MESSENGER = 'Messenger',
  USERS = 'Users',
  GAME = 'Game',
}

export enum StatusMessageTypeEnum {
  PENDING = 'pending',
  READY = 'ready',
  ERROR = 'error',
}

export enum ResultCodes {
  Success = 0,
  Error = 1,
}

export type FormPropsType = {
  onSubmit: Function;
  isValid?: Nullable<boolean>;
  captchaUrl?: Nullable<string>;
  errorsText?: Nullable<string[]>;
};

export enum ResultCodesForCaptcha {
  CaptchaIsRequired = 10,
}

export type BaseResponseType = {
  resultCode: ResultCodes;
  messages: string[];
  data: {};
};

export type APIResponseType<D = {}, RC = ResultCodes> = {
  data: D;
  resultCode: RC;
  messages: string[];
};

export type PhotosType = {
  small: Nullable<string>;
  large: Nullable<string>;
};

export type ContactsType = {
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

export type ProfileType = {
  userId: Nullable<number>;
  lookingForAJob: boolean;
  lookingForAJobDescription: Nullable<string>;
  fullName: Nullable<string>;
  aboutMe: Nullable<string>;
  contacts: ContactsType;
  photos: PhotosType;
};

export type UserType = {
  id: number;
  name: string;
  photos: { small: Nullable<string>; large: Nullable<string> };
  status: string;
  followed: boolean;
};

export type PostType = {
  id: number;
  message: Nullable<string>;
  likesCount: number;
};

export type ChatMessageType = {
  id: string | number;
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

export type UsersType = {
  items: UserType[];
  totalCount: number;
};

export type FilterType = {
  term: string;
  friend: boolean;
  pages?: number;
};

export type MessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};
