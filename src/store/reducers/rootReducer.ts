import {combineReducers} from "redux";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    message: messagesReducer,
    profile: profileReducer
})
