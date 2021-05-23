import {USERS_FOLLOW, USERS_REQUEST} from "../types";

const initialState = {
    users: [],
    loading: true
}

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USERS_REQUEST:
            return {
                ...state,
                users: action.users,
                loading: !state.loading
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
        default:
            return state;
    }
}

export default userReducer;
