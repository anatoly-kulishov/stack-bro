import {
    ADD_POST,
    GET_FOLLOWING_STATUS, GET_PROFILE_STATUS,
    NEW_PROFILE_PHOTO_SENDS,
    REMOVE_POST,
    SAVE_PHOTO_SUCCESS,
    SAVE_PROFILE_FAILED,
    SAVE_PROFILE_SUCCESS,
    SET_OWNER_PROFILE,
    SET_OWNER_STATUS,
    SET_PROFILE_STATUS,
    SET_USER_PROFILE,
    SHOW_PROFILE_LOADER
} from "../../store-types";
import {Nullable, ProfileType} from "../../../types";

const initialState = {
    isOwner: true,
    isLoading: true,
    isValid: true,
    error: null,
    posts: [] as object[],
    selectedProfile: {},
    ownerProfile: {} as ProfileType,
    profile: {} as ProfileType,
    status: '',
    followStatus: null as Nullable<boolean>
}

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.payload,
                isLoading: false
            }
        case SET_OWNER_PROFILE:
            return {
                ...state,
                ownerProfile: action.payload,
                isLoading: false
            }
        case SET_OWNER_STATUS:
            return {
                ...state,
                isOwner: action.payload
            }
        case GET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status.status
            }
        case GET_FOLLOWING_STATUS:
            return {
                ...state,
                followStatus: action.followStatus
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
        case SHOW_PROFILE_LOADER:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}

export type InitialStateType = typeof initialState;
// type ActionsType = InferActionsTypes<typeof actions>;
export default profileReducer;