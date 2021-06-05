import {
    SET_USERS,
    FOLLOW_UNFOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    TOGGLE_IS_FOLLOWING_PROGRESS
} from "../types";

const initialState = {
    isLoading: true,
    followingInProgress: [],
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
                totalUsersCount: action.totalUsersCount,
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
        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user: any) => {
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
                    : state.followingInProgress.filter((id: number) => id !== action.userId),
            }
        default:
            return state;
    }
}

export default usersReducer;
