export type AppType = {
    isAuth: boolean | null,
    initialized: boolean | null,
    initializeApp: Function
}

export type CopyToClipboardType = {
    children: string,
    customStyles: any,
    copy: boolean,
    placeholder: string,
    onDoubleClickHandler: () => void
}

export type MyAccountType = {
    myProfile: object,
    profile: {
        fullName: string,
        photos: {
            large: string
        }
    },
    logOut: () => void
}

export type MyAccountSubMenuType = {
    logOut: () => void
}

export type MessagesType = {
    messages: Array<object>
}

export type MessageItemType = {
    id: number,
    message: string
}

export type MessageInputType = {
    message: string,
    setMessage: (symbol: string) => void,
    onAddMessage: () => void
}

export type LoginType = {
    signIn: (profile: object, setSubmitting: Function, resetForm: Function) => void,
    errorText: string,
    isValidAuth: boolean,
    captchaUrl: string
}

export type FormType = {
    onSubmit: Function,
    errorText: string,
    isValid: boolean,
    captchaUrl?: string
}

export type ProfileType = {
    profile: { fullName: string },
    myProfile: object,
    isLoading: boolean,
    match: object,
    location: object,
    history: object,
    saveProfile: Function
}

export type ProfileInfoType = {
    profile: { fullName: string },
    myProfile: object,
    isLoading: boolean,
    history: object,
    match: object,
    saveProfile: Function,
    errorText?: string | null
}

export type MyPostsType = {
    posts: Array<{
        id: number,
        message: string,
        likesCount: number
    }>
    onAddPost: (message: string) => void,
    profile: { fullName: string, photos: { large: string, small: string } }
}

export type PostType = {
    message: string,
    likesCount: number,
    profile: { fullName: string, photos: { large: string, small: string } }
}

export type UsersType = {
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

export type UserType = {
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

export type GoBackType = {
    title?: string,
    history: { goBack: Function }
}

export type ProfileStatusType = {
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void,
    profile: { fullName: string },
    status: string,
}

export type PaginatorType = {
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    setCurrentPage: (pageNumber: number) => void
}