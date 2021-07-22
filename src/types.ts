export type Nullable<T> = T | null;

export type FormPropsType = {
    onSubmit: Function,
    errorText?: string | null,
    isValid?: boolean | null,
    captchaUrl?: string | null
}

export enum ResultCodes {
    Success = 0,
    Error = 1
}

export enum ResultCodesForCaptcha {
    CaptchaIsRequired = 10
}

export type BaseResponseType = {
    resultCode: ResultCodes,
    messages: Array<string>
    data: {}
}

export type APIResponseType<D = {}, RC = ResultCodes> = {
    data: D,
    resultCode: RC,
    messages: Array<string>
}

export type PhotosType = {
    small: Nullable<string>,
    large: Nullable<string>,
}

export type ContactsType = {
    key?: Nullable<string>,
    github: Nullable<string>,
    vk: Nullable<string>,
    facebook: Nullable<string>,
    instagram: Nullable<string>,
    twitter: Nullable<string>,
    website: Nullable<string>,
    youtube: Nullable<string>,
    mainLink: Nullable<string>
}

export type ProfileType = {
    userId: number | null,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    aboutMe: string | null,
    contacts: ContactsType
    photos: PhotosType
}

export type MyProfileType = {
    id: number,
    email: string | null,
    login: string | null
}

export type UserType = {
    id: number,
    name: string,
    photos: { small: Nullable<string>, large: Nullable<string> },
    status: string,
    followed: boolean,
}

export type PostType = {
    id: number,
    message: Nullable<string>,
    likesCount: number
}