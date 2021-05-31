import {ADD_POST, SET_USER_PROFILE} from "../types";

const initialState = {
    profile: null,
    posts: [],
    isLoading: true
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
                isLoading: false
            }
        case ADD_POST:
            return {
                ...state,
                posts: [{...action.payload}, ...state.posts]
            }
        default:
            return state
    }
}

export default profileReducer;
