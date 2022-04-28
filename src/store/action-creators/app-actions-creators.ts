import { InitializedFailed, InitializedSuccess } from '../actions/app-actions/app-actions';
import { setFriends, setUsers } from './users-actions-creators';
import { AppActionType } from '../action-types';
import { authMe } from './auth-actions-creators';

export const appActions = {
  initializedSuccess: (): InitializedSuccess => ({ type: AppActionType.INITIALIZED_SUCCESS }),
  initializedFailed: (): InitializedFailed => ({ type: AppActionType.INITIALIZED_FAILED }),
};

/**
 * Initialize App
 */
export const initializeApp = (isAuth: boolean) => {
  if (isAuth) {
    return (dispatch: Function) => {
      const authMePromise = dispatch(authMe());
      const setUsersPromise = dispatch(setUsers(1, 9, { term: '', friend: false }));
      const setFriendsPromise = dispatch(setFriends(1, 9));
      Promise.all([authMePromise, setUsersPromise, setFriendsPromise])
        .then(() => {
          dispatch(appActions.initializedSuccess());
        })
        .catch(() => dispatch(appActions.initializedFailed()));
    };
  }
  return (dispatch: Function) => {
    const authMePromise = dispatch(authMe());
    Promise.all([authMePromise])
      .then(() => {
        dispatch(appActions.initializedSuccess());
      })
      .catch(() => dispatch(appActions.initializedFailed()));
  };
};

/**
 * Copy on click
 * @param:string text
 */
export function copy(text: string) {
  return async () => {
    navigator.clipboard.writeText(text).then(() => {
      console.info(`copy(${text})`);
    });
  };
}
