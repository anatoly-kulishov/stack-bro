import {
    ADD_POST, NEW_PROFILE_PHOTO_SENDS,
    REMOVE_POST,
    SAVE_PHOTO_SUCCESS, SAVE_PROFILE_FAILED, SAVE_PROFILE_SUCCESS,
    SET_PROFILE_STATUS,
    SET_USER_PROFILE
} from "../../types";

const initialState = {
    isOwner: true,
    isLoading: true,
    isValid: true,
    error: null,
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
        case NEW_PROFILE_PHOTO_SENDS:
            return {
                ...state,
                isLoading: true
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: {...action.photos}},
                isLoading: false
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
        case SAVE_PROFILE_SUCCESS:
            return {
                ...state,
                isValid: true
            }
        case SAVE_PROFILE_FAILED:
            return {
                ...state,
                isValid: false,
                error: action.error
            }
        default:
            return state
    }
}

export default profileReducer;