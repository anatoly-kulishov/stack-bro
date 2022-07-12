import { BaseResponseType, FilterType, UserType } from '../types';
import { baseInstance } from './instances';

type RequestUsersApiType = {
  items: UserType[];
  data: {};
  totalCount: number;
  error: string;
};

const BASE_URL: string = 'users';
const SECONDARY_URL: string = 'follow';

export const usersAPI = {
  requestUsers: (currentPage: number, pageSize: number, filter: FilterType) => {
    return baseInstance
      .get<RequestUsersApiType>(
        `${BASE_URL}?page=${currentPage}&count=${pageSize}${filter?.term ? `&term=${filter.term}` : ''}${
          filter?.friend ? `&friend=${filter?.friend}` : ''
        }`,
      )
      .then(res => res.data);
  },
  getCurrentUserFollower: (userId: number) => {
    return baseInstance.get<boolean>(`${SECONDARY_URL}/${userId}`).then(res => res.data);
  },
  postUserFollow: (userId: number) => {
    return baseInstance.post<BaseResponseType>(`${SECONDARY_URL}/${userId}`, null).then(res => res.data);
  },
  deleteUserUnfollow: (userId: number) => {
    return baseInstance.delete<BaseResponseType>(`${SECONDARY_URL}/${userId}`).then(res => res.data);
  },
};
