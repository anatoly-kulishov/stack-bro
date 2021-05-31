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
    profile: profileReducer
})