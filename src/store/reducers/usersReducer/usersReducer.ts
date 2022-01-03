import {
  TOGGLE_FOLLOW_UNFOLLOW,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  TOGGLE_IS_FOLLOWING_PROGRESS, SET_USERS_FILTER, SET_USERS_SUCCESS, SET_FRIENDS_SUCCESS
} from "../../store-types";
import {Nullable, UserType} from "../../../types";

const initialState = {
  isLoading: true,
  followingInProgress: [] as Array<number>,
  users: [] as Array<UserType>,
  friends: [] as Array<UserType>,
  pageSize: 9,
  totalUsersCount: 0,
  totalFriendsCount: 0,
  currentPage: 1,
  filter: {
    term: '',
    friend: null as Nullable<boolean>,
    // page: 1 Todo!
  }
}

const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        totalUsersCount: action.totalUsersCount,
        isLoading: false
      }
    case SET_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.friends,
        totalFriendsCount: action.totalFriendsCount,
        isLoading: false
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
        isLoading: true
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUserCount,
        isLoading: true
      }
    case TOGGLE_FOLLOW_UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: !user.followed}
          }
          return user;
        })
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id: number) => (id !== action.userId)),
      }
    case SET_USERS_FILTER:
      return {
        ...state,
        filter: action.payload
      }
    default:
      return state;
  }
}

export type FilterType = typeof initialState.filter;
export type InitialStateType = typeof initialState;
// type ActionsType = InferActionsTypes<typeof actions>;
export default usersReducer;
