import { Action, combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { messengerReducer } from './messengerReducer/messengerReducer';
import { profileReducer } from './profileReducer/profileReducer';
import { usersReducer } from './usersReducer/usersReducer';
import { authReducer } from './authReducer/authReducer';
import { appReducer } from './appReducer/appReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  users: usersReducer,
  profile: profileReducer,
  messenger: messengerReducer,
});

export type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;
