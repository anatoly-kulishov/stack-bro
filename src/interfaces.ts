export interface IApp {
    isAuth?: boolean | undefined,
    isLoading?: boolean | undefined,
    authMe: Function
}

export interface ICopyToClipboard {
    children: string,
    customStyles?: any,
    onDoubleClickHandler?: any
}

export interface IMyAccount {
    myProfile?: any,
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
    isValidAuth: boolean | undefined
}

export interface iForm {
    onSubmit: Function,
    isValid: boolean | undefined,
    errorText: string | undefined
}

export interface IProfile {
    profile: any,
    isLoading: boolean,
    match: any,
    location: any,
    history: any
}

export interface IProfileInfo {
    profile: any,
    isLoading: boolean,
    history: any,
    match: any
}

export interface IMyPosts {
    posts: Array<{
        id: number,
        message: string,
        likeCount: number
    }>
    onAddPost: Function
}

export interface IPost {
    message: string,
    likesCount: number
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
    setProfile: Function
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