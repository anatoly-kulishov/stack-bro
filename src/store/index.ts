import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./reducers/rootReducer";

const middleware = [thunk];

export default createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)