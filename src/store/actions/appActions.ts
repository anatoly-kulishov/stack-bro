import { AppActionType } from '../action-types/app-action-type';
import { authMe } from './authActions';
import { setFriends, setUsers } from './usersActions/usersActions';

export const actions = {
  initializedSuccess: () => ({ type: AppActionType.INITIALIZED_SUCCESS }),
  initializedFailed: () => ({ type: AppActionType.INITIALIZED_FAILED }),
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
          dispatch(actions.initializedSuccess());
        })
        .catch(() => dispatch(actions.initializedFailed()));
    };
  }
  return (dispatch: Function) => {
    const authMePromise = dispatch(authMe());
    Promise.all([authMePromise])
      .then(() => {
        dispatch(actions.initializedSuccess());
      })
      .catch(() => dispatch(actions.initializedFailed()));
  };
};

/**
 * Copy on click
 * @param:string text
 */
export function copy(text: string) {
  return async () => {
    navigator.clipboard.writeText(text).then(() => {
      // eslint-disable-next-line no-console
      console.info(`copy(${text})`);
    });
  };
}
