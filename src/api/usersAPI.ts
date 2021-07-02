import {baseInstance} from "./instances";
import {BaseResponseType, UserType} from "../types/Types";

type RequestUsersApiType = {
    items: Array<UserType>
    data: {},
    totalCount: number,
    error: string
}

const usersAPI = {
    requestUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return baseInstance.get<RequestUsersApiType>(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    getCurrentUserFollower: (userId: number) => {
        return baseInstance.get<null>(`follow/${userId}`).then(res => res.data)
    },
    postUserFollow: (userId: number) => {
        return baseInstance.post<BaseResponseType>(`follow/${userId}`, null).then(res => res.data)
    },
    deleteUserUnfollow: (userId: number) => {
        return baseInstance.delete<BaseResponseType>(`follow/${userId}`).then(res => res.data)
    }
}

export default usersAPI;