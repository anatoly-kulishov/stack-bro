import {combineReducers} from "redux";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    user: userReducer,
    dialogs: dialogsReducer,
    profile: profileReducer
})