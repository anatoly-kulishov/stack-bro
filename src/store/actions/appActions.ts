import {INITIALIZED_SUCCESS} from "../store-types";
import {authMe} from "./authActions";
import {setFriends, setUsers} from "./usersActions/usersActions";

export const actions = {
    initializedSuccess: () => ({type: INITIALIZED_SUCCESS} as const)
}

/**
 * Initialize App
 */
export const initializeApp = (isAuth: boolean) => {
    if (isAuth) {
        return (dispatch: Function) => {
            const authMePromise = dispatch(authMe());
            const setUsersPromise = dispatch(setUsers(1, 9, {term: '', friend: false}));
            const setFriendsPromise = dispatch(setFriends(1, 9));
            Promise.all([authMePromise, setUsersPromise, setFriendsPromise])
                .then(() => {
                    dispatch(actions.initializedSuccess());
                });
        }
    } else {
        return (dispatch: Function) => {
            const authMePromise = dispatch(authMe());
            Promise.all([authMePromise])
                .then(() => {
                    dispatch(actions.initializedSuccess());
                });
        }
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
