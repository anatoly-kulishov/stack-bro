import {getCaptchaUrl} from "./store/actions/authActions";

export interface IApp {
    isAuth: boolean | undefined,
    initialized: boolean | undefined,
    initializeApp: Function
}

export interface ICopyToClipboard {
    children: string,
    customStyles?: any,
    copy?: boolean,
    placeholder?: string,
    onDoubleClickHandler?: any
}

export interface IMyAccount {
    myProfile: any,
    profile: any,
    logOut: Function,
}

export interface IMyAccountSubMenu {
    logOut: Function,
}

export interface IMessages {
    messages: Array<object>
}

export interface IMessageItem {
    id: number | string,
    message: string,
}

export interface IMessageInput {
    message: string,
    setMessage: Function,
    onAddMessage: Function
}

export interface ILogin {
    signIn: Function,
    errorText: string | undefined,
    isValidAuth: boolean | undefined,
    captchaUrl: any
}

export interface iForm {
    onSubmit: Function,
    errorText: string | undefined,
    isValid: boolean | undefined,
    captchaUrl: any
}

export interface IProfile {
    profile: any,
    myProfile: any,
    isLoading: boolean,
    match: any,
    location: any,
    history: any,
    saveProfile: any
}

export interface IProfileInfo {
    profile: any,
    myProfile: any,
    isLoading: boolean,
    history: any,
    match: any,
    saveProfile: any
    errorText?: any
}

export interface IMyPosts {
    posts: Array<{
        id: number,
        message: string,
        likesCount: number
    }>
    onAddPost: Function,
    profile: any
}

export interface IPost {
    message: string,
    likesCount: number,
    profile: any
}

export interface IUsers {
    users: Array<{
        id: number,
        name: string,
        photos: { small: string, large: string },
        status: string,
        followed: boolean,
    }>,
    isLoading: boolean,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setUsers: Function,
    userFollow: Function,
    userUnfollow: Function,
    setCurrentPage: Function,
    setCurrentUserFollower: Function,
    followingInProgress: [number]
}

export interface IUser {
    user: {
        id: number,
        name: string,
        photos: { small: string, large: string },
        status: string,
        followed: boolean
    },
    userFollow: Function,
    userUnfollow: Function,
    setCurrentUserFollower: Function,
    isLoading: boolean,
    followingInProgress: [number]
}

export interface INavBar {
    profile?: any
}

export interface IAppNavigation {
    isLoading?: boolean | undefined,
}

export interface IGoBack {
    title?: string,
    history: any
}

export interface IProfileStatus {
    getStatus: Function,
    updateStatus: Function,
    profile: any,
    status: string,
}

export interface IPaginator {
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    setCurrentPage: Function
}