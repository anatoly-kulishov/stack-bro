import {Action, combineReducers} from "redux";
import {ThunkAction} from "redux-thunk";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";
import messengerReducer from "./messengerReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    users: usersReducer,
    profile: profileReducer,
    messenger: messengerReducer
})

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>