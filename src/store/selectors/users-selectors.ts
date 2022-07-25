import { createSelector } from 'reselect';

import { IUserType } from '../../shared/types/user.types';
import { AppStateType } from '../reducers';

export const getUsersState = (state: AppStateType) => state.users;
export const getUsersTotalCount = (state: AppStateType) => state.users.totalUsersCount;
export const getUsersTotalFriendCount = (state: AppStateType) => state.users.totalFriendsCount;
export const getUsersSelector = (state: AppStateType): IUserType[] => state.users.users;
export const getFriendsSelector = (state: AppStateType): IUserType[] => state.users.friends;

export const getUsers = createSelector(getUsersSelector, (users: IUserType[]) => {
  return users.filter((user: IUserType) => user);
});

export const getFriends = createSelector(getFriendsSelector, (users: IUserType[]) => {
  return users.filter((user: IUserType) => user);
});
