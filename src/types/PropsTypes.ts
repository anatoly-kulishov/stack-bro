import {ProfileType, UserType} from "./GeneralTypes";

export type AppPropsType = {
    isAuth: boolean | null,
    initialized: boolean | null,
    initializeApp: Function
}

export type FormPropsType = {
    onSubmit: Function,
    errorText?: string | null,
    isValid?: boolean | null,
    captchaUrl?: string | null
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

export type ProfileStatusPropsType = {
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void,
    profile: ProfileType,
    status: string,
}
export type FileFieldPropsType = {
    save: (file: File | null, setSubmitting: Function) => void
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