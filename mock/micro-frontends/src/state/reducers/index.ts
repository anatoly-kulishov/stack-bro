import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router';
import {History} from 'history';
import userReducer from './userReducer';

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    user: userReducer
})
export default createRootReducer;
