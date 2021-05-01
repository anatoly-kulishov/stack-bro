import {combineReducers} from "redux";
import appReducer from "./appReducer";

export const rootReducer = combineReducers({
    app: appReducer,
})
