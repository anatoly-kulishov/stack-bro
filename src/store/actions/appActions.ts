import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {INITIALIZED_SUCCESS} from "../store-types";
import {authMe} from "./authActions";
import {setProfile} from "./profileActions";
import {AppStateType} from "../reducers/rootReducer";

export const actions = {
    initializedSuccess: () => ({type: INITIALIZED_SUCCESS} as const)
}

type ThunkType = ThunkAction<void, AppStateType, unknown, Action>;
// export type ProfileActionsTypes = null;

/**
 * Initialize App
 */
export const initializeApp = (): ThunkType => {
    return (dispatch: Function) => {
        let authMePromise = dispatch(authMe());
        let setProfilePromise = dispatch(setProfile(17461));
        Promise.all([authMePromise, setProfilePromise])
            .then(() => {
                dispatch(actions.initializedSuccess());
            });
    }
}

/**
 * Copy on click
 * @param text
 */
export function copy(text: string) {
    return async () => {
        navigator.clipboard.writeText(text).then(() => {
            console.log(`copy(${text})`)
        })
    }
}