import { IUserFilter, IUserType } from '../shared/types/user.types';
import { baseInstance } from '../api/api.instances';
import { IBaseResponse } from '../shared/types';

interface IRequestUsersApi {
  items: IUserType[];
  data: {};
  totalCount: number;
  error: string;
}

const BASE_URL: string = 'users';
const SECONDARY_URL: string = 'follow';

export const usersService = {
  requestUsers: (currentPage: number, pageSize: number, filter: IUserFilter) => {
    return baseInstance
      .get<IRequestUsersApi>(
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
    return baseInstance.post<IBaseResponse>(`${SECONDARY_URL}/${userId}`, null).then(res => res.data);
  },
  deleteUserUnfollow: (userId: number) => {
    return baseInstance.delete<IBaseResponse>(`${SECONDARY_URL}/${userId}`).then(res => res.data);
  },
};
