import { setFriends, setUsers } from './usersActions/usersActions';
import { AppActionType } from '../action-types/app-action-type';
import { authMe } from './authActions';

export const actions = {
  initializedSuccess: () => ({ type: AppActionType.INITIALIZED_SUCCESS }),
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
      Promise.all([authMePromise, setUsersPromise, setFriendsPromise]).then(() => {
        dispatch(actions.initializedSuccess());
      });
    };
  }
  return (dispatch: Function) => {
    const authMePromise = dispatch(authMe());
    Promise.all([authMePromise]).then(() => {
      dispatch(actions.initializedSuccess());
    });
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
