import {
    SET_USERS,
    TOGGLE_FOLLOW_UNFOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    TOGGLE_IS_FOLLOWING_PROGRESS
} from "../store-types";

const initialState = {
    isLoading: true,
    followingInProgress: [] as object[],
    users: [] as any[],
    pageSize: 12,
    totalUsersCount: 0,
    currentPage: 1
}

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
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
        case TOGGLE_FOLLOW_UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user: { id: number, followed: boolean }) => {
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
                    : state.followingInProgress.filter((id: object) => (id !== action.userId)),
            }
        default:
            return state;
    }
}

export default usersReducer;
