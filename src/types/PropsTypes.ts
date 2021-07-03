import {ProfileType, UserType} from "./GeneralTypes";
import {DialogType, MessageType} from "../store/reducers/dialogsReducer/dialogsReducer";
import {ProfileActionType} from "../store/actions/authActions";

export type AppPropsType = {
    isAuth: boolean | null,
    initialized: boolean | null,
    initializeApp: Function
}

export type CopyToClipboardPropsType = {
    children: string,
    customStyles: any,
    copy: boolean,
    placeholder: string,
    onDoubleClickHandler: () => void
}

export type MyAccountPropsType = {
    profile: any,
    myProfile: any,
    logOut: () => void
}

export type MyAccountSubMenuPropsType = {
    logOut: () => void
}

export type MessagesPropsType = {
    messages: MessageType[]
}

export type MessageItemPropsType = {
    id: number,
    message: string
}

export type MessageInputPropsType = {
    message: string,
    setMessage: (symbol: string) => void,
    onAddMessage: () => void
}

export type LoginPropsType = {
    signIn: (profile: ProfileActionType, setSubmitting: Function, resetForm: Function) => void,
    errorText: string | null,
    isValidAuth: boolean,
    captchaUrl: string | null
}

export type FormPropsType = {
    onSubmit: Function,
    errorText: string | null | undefined,
    isValid?: boolean | null,
    captchaUrl?: string | null
}

export type ProfilePropsType = {
    profile: ProfileType,
    myProfile: object,
    isLoading: boolean,
    match: object,
    location: object,
    history: object,
    saveProfile: () => Promise<any>,
    savePhoto: () => void
}

export type ProfileInfoPropsType = {
    profile: ProfileType,
    myProfile: object,
    isLoading: boolean,
    match: object,
    history: object,
    errorText?: string | null,
    saveProfile: () => Promise<any>,
    savePhoto: () => void
}

export type MyPostsPropsType = {
    posts: Array<{
        id: number,
        message: string,
        likesCount: number
    }>
    onAddPost: (message: string) => void,
    profile: ProfileType
}

export type PostPropsType = {
    message: string,
    likesCount: number,
    profile: ProfileType
}

export type UsersPropsType = {
    users: Array<UserType>,
    isLoading: boolean,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setUsers: (requestPage: number, pageSize: number) => void,
    userFollow: (userId: number) => void,
    userUnfollow: (userId: number) => void,
    setCurrentPage: (pageNumber: number) => void,
    setCurrentUserFollower: (userId: number) => void,
    followingInProgress: [number]
}

export type UserPropsType = {
    user: UserType,
    isLoading: boolean,
    userFollow: (userId: number) => void,
    userUnfollow: (userId: number) => void,
    setCurrentUserFollower: (userId: number) => void,
    followingInProgress: [number]
}

export type GoBackPropsType = {
    title?: string | undefined,
    history: { goBack: Function }
}

export type ProfileStatusPropsType = {
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void,
    profile: ProfileType,
    status: string,
}

export type PaginatorPropsType = {
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    setCurrentPage: (pageNumber: number) => void
}

export type FileFieldPropsType = {
    save: (file: File | null, setSubmitting: Function) => void
}

export type DialogListPropsType = {
    dialogs: DialogType[]
}

export type DialogItemPropsType = {
    id: number | string,
    name: string,
}

export type ProfilePhotoPropsType = {
    profile: ProfileType,
    isLoading: boolean | null,
    saveProfile: () => Promise<any>,
    savePhoto: () => void
}

export type ProfileDataFormForm = {
    profile: ProfileType
}

export type ProfileDataPropsType = {
    profile: ProfileType
}

export type ContactPropsType = {
    logic: boolean,
    title: string,
    value: any
}