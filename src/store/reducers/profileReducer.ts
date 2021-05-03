import {CREATE_POST} from "../types";

const initialState = {
    posts: [],
    loading: true
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                // posts: []
            }
        default:
            return state
    }
}

export default profileReducer;
