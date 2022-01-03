import {baseInstance} from "./instances";
import {BaseResponseType, UserType} from "../types";
import {FilterType} from "../store/reducers/usersReducer/usersReducer";

type RequestUsersApiType = {
  items: Array<UserType>
  data: {},
  totalCount: number,
  error: string
}

const usersAPI = {
  requestUsers: (currentPage: number, pageSize: number, filter: FilterType) => {
    return baseInstance.get<RequestUsersApiType>(`users?page=${currentPage}&count=${pageSize}${filter.term ? `&term=${filter.term}` : ''}${filter.friend ? `&friend=${filter.friend}` : ''}`).then(res => res.data)
  },
  getCurrentUserFollower: (userId: number) => {
    return baseInstance.get<boolean>(`follow/${userId}`).then(res => res.data)
  },
  postUserFollow: (userId: number) => {
    return baseInstance.post<BaseResponseType>(`follow/${userId}`, null).then(res => res.data)
  },
  deleteUserUnfollow: (userId: number) => {
    return baseInstance.delete<BaseResponseType>(`follow/${userId}`).then(res => res.data)
  }
}

export default usersAPI;
