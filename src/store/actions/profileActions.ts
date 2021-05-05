import {ADD_POST} from "../types";
import {errorMessage} from "../../constants";

export function addPost(post: object) {
    return async (dispatch: any) => {
        try {
            dispatch({
                type: ADD_POST,
                payload: post
            })
        } catch (e) {
            console.error(errorMessage)
        }
    }
}