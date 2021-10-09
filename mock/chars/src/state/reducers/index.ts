import {combineReducers} from "redux";
import filterReducer from "./filterReducer";

const reducers = combineReducers({
    filter: filterReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;