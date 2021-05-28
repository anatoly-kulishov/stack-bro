import {SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, USERS_FOLLOW, USERS_REQUEST} from "../types";

const initialState = {
    loading: true,
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USERS_REQUEST:
            return {
                ...state,
                users: action.users,
                totalUsersCount: action.totalUsersCount,
                loading: false
            }
        case USERS_FOLLOW:
            return {
                ...state,
                // users: state.users.map(user => {
                //     if (user.id === action.userId) {
                //         return {...user, followed: !user.followed}
                //     }
                //     return user;
                // })
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
                loading: true
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUserCount,
                loading: true
            }
        default:
            return state;
    }
}

export default userReducer;
