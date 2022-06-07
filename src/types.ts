export type Nullable<T> = T | null;
export type Undetectable<T> = T | undefined;

export type FormPropsType = {
  onSubmit: Function;
  errorsText?: string[] | null;
  isValid?: boolean | null;
  captchaUrl?: string | null;
};

export enum ResultCodes {
  Success = 0,
  Error = 1,
}

export enum StatusMessageTypeEnum {
  PENDING = 'pending',
  READY = 'ready',
  ERROR = 'error',
}

export enum ResultCodesForCaptcha {
  CaptchaIsRequired = 10,
}

export type BaseResponseType = {
  resultCode: ResultCodes;
  messages: Array<string>;
  data: {};
};

export type APIResponseType<D = {}, RC = ResultCodes> = {
  data: D;
  resultCode: RC;
  messages: Array<string>;
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
  userId: number | null;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  aboutMe: string | null;
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

export enum AppRoutesEnum {
  HOME = '/',
  USERS = 'users',
  SOME_USER = ':userId',
  MESSENGER = 'messenger',
  HELP = 'help',
  GAME = 'game',
}

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
