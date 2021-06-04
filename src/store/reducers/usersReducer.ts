import {SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, USER_FOLLOW_OR_UNFOLLOW, USERS_REQUEST} from "../types";

const initialState = {
    isLoading: true,
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USERS_REQUEST:
            return {
                ...state,
                users: action.users,
                totalUsersCount: action.totalUsersCount,
                isLoading: false
            }
        case USER_FOLLOW_OR_UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user: any) => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user;
                })
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
        default:
            return state;
    }
}

export default usersReducer;
