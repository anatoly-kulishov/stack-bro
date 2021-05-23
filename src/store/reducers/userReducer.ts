import {USERS_FOLLOW, USERS_REQUEST} from "../types";

const initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://sun9-74.userapi.com/impg/_nTCDNC_ZzG9kYKXG-10Xz36k7SQ0FgX9-o8qg/jIkPax8Rw8Q.jpg?size=1440x2160&quality=95&sign=0098bf8f6e07ebb1c98150241ed13847&type=album',
            followed: false,
            fullName: 'Anatoly',
            status: 'Keep simple stupid',
            location: {city: 'Belgorod', country: 'Russia'}
        },
        {
            id: 2,
            photoUrl: 'https://sun9-74.userapi.com/impg/_nTCDNC_ZzG9kYKXG-10Xz36k7SQ0FgX9-o8qg/jIkPax8Rw8Q.jpg?size=1440x2160&quality=95&sign=0098bf8f6e07ebb1c98150241ed13847&type=album',
            followed: true,
            fullName: 'Aidar',
            status: 'Just cool status',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://sun9-74.userapi.com/impg/_nTCDNC_ZzG9kYKXG-10Xz36k7SQ0FgX9-o8qg/jIkPax8Rw8Q.jpg?size=1440x2160&quality=95&sign=0098bf8f6e07ebb1c98150241ed13847&type=album',
            followed: false,
            fullName: 'Anatoly',
            status: 'Just cool status too',
            location: {city: 'Bishkek', country: 'Kyrgyzstan'}
        }
    ]
}

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USERS_REQUEST:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case USERS_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user;
                })
            }
        default:
            return state;
    }
}

export default userReducer;
