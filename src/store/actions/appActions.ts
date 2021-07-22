import {INITIALIZED_SUCCESS} from "../store-types";
import {authMe} from "./authActions";
import {setFriends, setUsers} from "./usersActions/usersActions";

export const actions = {
    initializedSuccess: () => ({type: INITIALIZED_SUCCESS} as const)
}

/**
 * Initialize App
 */
export const initializeApp = () => {
    return (dispatch: Function) => {
        let authMePromise = dispatch(authMe());
        let setUsersPromise = dispatch(setUsers(1, 9, {term: '', friend: false}));
        let setFriendsPromise = dispatch(setFriends(1, 9))
        Promise.all([authMePromise, setUsersPromise, setFriendsPromise])
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
