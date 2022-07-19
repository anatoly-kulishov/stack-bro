import produce from 'immer';

import { UserType } from '../../../shared/types';
import { UsersActions } from '../../actions/users-actions/users-actions';
import { UsersActionType } from '../../action-types';

export type UsersInitialStateType = {
  isLoading: boolean;
  followingInProgress: number[];
  users: UserType[];
  friends: UserType[];
  pageSize: number;
  totalUsersCount: number;
  totalFriendsCount: number;
  currentPage: number;
  filter: {
    term: string;
    friend: boolean;
  };
};

const initialState = {
  isLoading: true,
  followingInProgress: [] as number[],
  users: [] as UserType[],
  friends: [] as UserType[],
  pageSize: 9,
  totalUsersCount: 0,
  totalFriendsCount: 0,
  currentPage: 1,
  filter: {
    term: '',
    friend: false as boolean,
    // page: 1 Todo: Fix the problem with pages!
  },
};

export const usersReducer = produce((state: UsersInitialStateType, action: UsersActions): UsersInitialStateType => {
  switch (action.type) {
    case UsersActionType.SET_USERS_SUCCESS:
      state.users = action.users;
      state.totalUsersCount = action.totalUsersCount;
      state.isLoading = false;
      return state;
    case UsersActionType.SET_FRIENDS_SUCCESS:
      state.friends = action.friends;
      state.totalFriendsCount = action.totalFriendsCount;
      state.isLoading = false;
      return state;
    case UsersActionType.SET_CURRENT_PAGE:
      state.currentPage = action.currentPage;
      state.isLoading = true;
      return state;
    case UsersActionType.SET_TOTAL_USERS_COUNT:
      state.totalUsersCount = action.totalUserCount;
      state.isLoading = true;
      return state;
    case UsersActionType.TOGGLE_FOLLOW_UNFOLLOW:
      state.users = state.users.map(user => {
        if (user.id === action.userId) {
          return { ...user, followed: !user.followed };
        }
        return user;
      });
      return state;
    case UsersActionType.TOGGLE_IS_FOLLOWING_PROGRESS:
      state.followingInProgress = action.followingInProgress
        ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter(id => id !== action.userId);
      return state;
    case UsersActionType.SET_USERS_FILTER:
      state.filter = action.filter;
      return state;
    default:
      return state;
  }
}, initialState);
