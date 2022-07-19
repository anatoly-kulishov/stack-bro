import { createSelector } from 'reselect';

import { AppStateType } from '../reducers';
import { UserType } from '../../shared/types';

export const getUsersState = (state: AppStateType) => state.users;
export const getUsersTotalCount = (state: AppStateType) => state.users.totalUsersCount;
export const getUsersTotalFriendCount = (state: AppStateType) => state.users.totalFriendsCount;
export const getUsersSelector = (state: AppStateType): UserType[] => state.users.users;
export const getFriendsSelector = (state: AppStateType): UserType[] => state.users.friends;

export const getUsers = createSelector(getUsersSelector, (users: UserType[]) => {
  return users.filter((user: UserType) => user);
});

export const getFriends = createSelector(getFriendsSelector, (users: UserType[]) => {
  return users.filter((user: UserType) => user);
});
