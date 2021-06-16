import {ADD_POST, SET_PROFILE_STATUS, SET_USER_PROFILE} from "../types";

const initialState = {
    isLoading: true,
    posts: [],
    selectedProfile: null,
    status: ''
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
                isLoading: false
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
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
