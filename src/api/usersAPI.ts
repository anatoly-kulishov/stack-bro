import { baseInstance } from './instances';
import { BaseResponseType, UserType } from '../types';
import { FilterType } from '../store/reducers/usersReducer/usersReducer';

type RequestUsersApiType = {
  items: Array<UserType>;
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
        `${BASE_URL}?page=${currentPage}&count=${pageSize}${filter.term ? `&term=${filter.term}` : ''}${
          filter.friend ? `&friend=${filter.friend}` : ''
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
