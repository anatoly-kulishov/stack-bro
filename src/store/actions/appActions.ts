import {setFriends, setUsers} from "./usersActions/usersActions";
import AppActionType from "../action-types/app-action-type";
import {ColorThemes} from "../../types";
import {authMe} from "./authActions";

export const actions = {
  initializedSuccess: () => ({type: AppActionType.INITIALIZED_SUCCESS} as const),
  changeThemeSuccess: (theme: ColorThemes) => ({type: AppActionType.CHANGE_THEME, payload: theme})
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

export const changeTheme = (theme: ColorThemes) => {
  return (dispatch: Function) => {
    dispatch(actions.changeThemeSuccess(theme))
  }
}

/**
 * Copy on click
 * @param:string text
 */
export function copy(text: string) {
  return async () => {
    navigator.clipboard.writeText(text).then(() => {
      console.log(`copy(${text})`)
    })
  }
}
