import {ADD_POST} from "../types";

const initialState = {
    posts: [],
    loading: true
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
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
