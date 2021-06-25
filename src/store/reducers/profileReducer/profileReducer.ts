import {ADD_POST, REMOVE_POST, SAVE_PHOTO_SUCCESS, SET_PROFILE_STATUS, SET_USER_PROFILE} from "../../types";

const initialState = {
    isLoading: true,
    posts: [],
    selectedProfile: {},
    profile: {},
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: {...action.photos}}
            }
        case ADD_POST:
            return {
                ...state,
                posts: [{...action.payload}, ...state.posts]
            }
        case REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter((p: any) => p.id !== action.postId)
            }
        default:
            return state
    }
}

export default profileReducer;