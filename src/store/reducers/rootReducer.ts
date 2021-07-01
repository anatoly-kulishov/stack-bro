import {combineReducers} from "redux";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    users: usersReducer,
    dialogs: dialogsReducer,
    profile: profileReducer,
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
// export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>