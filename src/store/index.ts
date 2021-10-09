import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./reducers/rootReducer";

export * as actionCreators from './action-creators';
export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)