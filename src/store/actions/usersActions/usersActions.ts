import { BaseThunkType, InferActionsTypes } from '../../reducers/rootReducer';
import { ProfileActionType } from '../../action-types/profile-action-type';
import { FilterType } from '../../reducers/usersReducer/usersReducer';
import { UsersActionType } from '../../action-types/users-action-type';
import { ResultCodes, UserType } from '../../../types';
import { usersAPI } from '../../../api/usersAPI';

export const userActions = {
  toggleFollowingProgress: (followingInProgress: boolean, userId: number) =>
    ({
      type: UsersActionType.TOGGLE_IS_FOLLOWING_PROGRESS,
      followingInProgress,
      userId,
    } as const),
  setCurrentPage: (pageNumber: number) =>
    ({
      type: UsersActionType.SET_CURRENT_PAGE,
      currentPage: pageNumber,
    } as const),
  setTotalUserCount: (totalUserCount: number) =>
    ({
      type: UsersActionType.SET_TOTAL_USERS_COUNT,
      totalUserCount,
    } as const),
  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: UsersActionType.TOGGLE_IS_FETCHING_USERS,
      isFetching,
    } as const),
  setFilter: (filter: FilterType) => ({ type: UsersActionType.SET_USERS_FILTER, payload: filter } as const),
};

/**
 * Returns all (or only filtered by name with term parameter) users splitted by page
 * @param:number requestPage
 * @param:number pageSize
 */
// eslint-disable-next-line @typescript-eslint/default-param-last
export const setUsers = (requestPage: number, pageSize: number = 9, filter: FilterType): ThunkType => {
  return async (dispatch: Function) => {
    dispatch(userActions.toggleIsFetching(true));
    dispatch(userActions.setCurrentPage(requestPage));
    dispatch(userActions.setFilter(filter));

    const data = await usersAPI.requestUsers(requestPage, pageSize, filter);
    dispatch(userActions.toggleIsFetching(false));
    dispatch(setUsersSuccess(data));
    // dispatch(actions.setTotalUserCount(data.totalCount))
  };
};

export const setFriends = (requestPage: number, pageSize: number): ThunkType => {
  return async (dispatch: Function) => {
    usersAPI
      .requestUsers(requestPage, pageSize, { term: '', friend: true })
      .then(data => dispatch(setFriendsSuccess(data)))
      .catch(e => console.error(e));
  };
};

type UsersType = {
  items: UserType[];
  totalCount: number;
};

const setUsersSuccess = (data: UsersType) => (dispatch: Function) => {
  dispatch({
    type: UsersActionType.SET_USERS_SUCCESS,
    users: data.items,
    totalUsersCount: data.totalCount,
  });
};

const setFriendsSuccess = (data: UsersType) => (dispatch: Function) => {
  dispatch({
    type: UsersActionType.SET_FRIENDS_SUCCESS,
    friends: data.items,
    totalFriendsCount: data.totalCount,
  });
};

/**
 * Get following status current user
 * @param:number userId
 */
export const setCurrentUserFollower = (userId: number): ThunkType => {
  return async (dispatch: Function) => {
    usersAPI
      .getCurrentUserFollower(userId)
      .then(data => {
        dispatch({
          type: ProfileActionType.GET_FOLLOWING_STATUS,
          userId,
          followStatus: data,
        });
      })
      .catch(e => console.error(e));
  };
};

/**
 * Follow to user
 * @param:number userId
 */
export const userFollow = (userId: number): ThunkType => {
  return async (dispatch: Function) => {
    await dispatch(userActions.toggleFollowingProgress(true, userId));
    usersAPI
      .postUserFollow(userId)
      .then(data => {
        if (data.resultCode === ResultCodes.Success) {
          dispatch({
            type: UsersActionType.TOGGLE_FOLLOW_UNFOLLOW,
            userId,
          });
        }
        dispatch(userActions.toggleFollowingProgress(false, userId));
      })
      .then(() => dispatch(setCurrentUserFollower(userId)))
      .catch(e => console.error(e));
  };
};

/**
 * Unfollow to user
 * @param:number userId
 */
export const userUnfollow = (userId: number): ThunkType => {
  return async (dispatch: Function) => {
    usersAPI
      .deleteUserUnfollow(userId)
      .then(data => {
        if (data.resultCode === ResultCodes.Success) {
          dispatch(userActions.toggleFollowingProgress(false, userId));
          dispatch({
            type: UsersActionType.TOGGLE_FOLLOW_UNFOLLOW,
            userId,
          });
        }
      })
      .then(() => dispatch(setCurrentUserFollower(userId)))
      .catch(e => console.error(e));
  };
};

export type ActionsTypes = InferActionsTypes<typeof userActions>;
export type ThunkType = BaseThunkType<ActionsTypes>;
