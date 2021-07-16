import {INITIALIZED_SUCCESS} from "../store-types";
import {authMe} from "./authActions";
import {updateProfile} from "./profileActions";
import {setUsers} from "./usersActions/usersActions";

export const actions = {
    initializedSuccess: () => ({type: INITIALIZED_SUCCESS} as const)
}

/**
 * Initialize App
 */
export const initializeApp = () => {
    return (dispatch: Function) => {
        let authMePromise = dispatch(authMe());
        let setUsersPromise = dispatch(setUsers());
        let setProfilePromise = dispatch(updateProfile(17461));
        Promise.all([authMePromise, setProfilePromise, setUsersPromise])
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
