import {createSelector} from "reselect";
import {AppStateType} from "../reducers/rootReducer";
import {UserType} from "../../types";

export const getUsersState = (state: AppStateType) => state.users;
export const getUsersSelector = (state: AppStateType): UserType[] => state.users.users;
export const getFriendsSelector = (state: AppStateType): UserType[] => state.users.friends;

export const getUsers = createSelector(getUsersSelector,
  (users: UserType[]) => {
    return users.filter((user: UserType) => user)
  })

export const getFriends = createSelector(getFriendsSelector,
  (users: UserType[]) => {
    return users.filter((user: UserType) => user)
  })