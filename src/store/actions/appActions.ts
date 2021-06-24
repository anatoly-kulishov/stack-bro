import {INITIALIZED_SUCCESS} from "../types";
import {authMe} from "./authActions";

/**
 * Copy
 * @param text
 */
export function copy(text: string) {
    return async () => {
        navigator.clipboard.writeText(text).then(() => {
            console.log(`copy(${text})`)
        })
    }
}

/**
 * App initialized Success
 */
export const initializedSuccess = () => (dispatch: Function) => dispatch({type: INITIALIZED_SUCCESS});

/**
 * Initialize App
 */
export const initializeApp = () => (dispatch: any) => {
    let authMePromise = dispatch(authMe());
    Promise.all([authMePromise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}