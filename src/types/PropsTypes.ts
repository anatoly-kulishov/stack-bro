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