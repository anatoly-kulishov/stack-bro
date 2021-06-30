import FileField from "../components/common/FileField";

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
    myProfile: object,
    profile: {
        fullName: string,
        photos: {
            large: string
        }
    },
    logOut: () => void
}

export type MyAccountSubMenuPropsType = {
    logOut: () => void
}

export type MessagesPropsType = {
    messages: [{
        id: number,
        message: string
    }]
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
    signIn: (profile: object, setSubmitting: Function, resetForm: Function) => void,
    errorText: string,
    isValidAuth: boolean,
    captchaUrl: string
}

export type FormPropsType = {
    onSubmit: Function,
    errorText: string,
    isValid: boolean,
    captchaUrl?: string
}

export type ProfilePropsType = {
    profile: { fullName: string },
    myProfile: object,
    isLoading: boolean,
    match: object,
    location: object,
    history: object,
    saveProfile: Function
}

export type ProfileInfoPropsType = {
    profile: { fullName: string },
    myProfile: object,
    isLoading: boolean,
    history: object,
    match: object,
    saveProfile: Function,
    errorText?: string | null
}

export type MyPostsPropsType = {
    posts: Array<{
        id: number,
        message: string,
        likesCount: number
    }>
    onAddPost: (message: string) => void,
    profile: { fullName: string, photos: { large: string, small: string } }
}

export type PostPropsType = {
    message: string,
    likesCount: number,
    profile: { fullName: string, photos: { large: string, small: string } }
}

export type UsersPropsType = {
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
    setUsers: (requestPage: number, pageSize: number) => void,
    userFollow: (userId: number) => void,
    userUnfollow: (userId: number) => void,
    setCurrentPage: (pageNumber: number) => void,
    setCurrentUserFollower: (userId: number) => void,
    followingInProgress: [number]
}

export type UserPropsType = {
    user: {
        id: number,
        name: string,
        photos: { small: string, large: string },
        status: string,
        followed: boolean
    },
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
    profile: { fullName: string },
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
    dialogs: [{
        id: number,
        name: string
    }]
}

export type DialogItemPropsType = {
    id: number | string,
    name: string,
}