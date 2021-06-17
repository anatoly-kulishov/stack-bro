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

export function initializedSuccess() {
    return (dispatch: Function) => {
        dispatch({
            type: INITIALIZED_SUCCESS
        })
    }
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(authMe());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}