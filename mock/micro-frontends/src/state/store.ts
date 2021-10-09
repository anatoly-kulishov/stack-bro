import {createStore, applyMiddleware} from 'redux';
import {GlobalStore} from 'redux-micro-frontends';
import { composeWithDevTools} from "redux-devtools-extension";
import { createBrowserHistory } from 'history';
import createRootReducer from "./reducers";
import {routerMiddleware} from "connected-react-router";

export const history = createBrowserHistory();
const rootReducer = createRootReducer(history);
export const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history)
        )
    )
);

export type RootState = ReturnType<typeof rootReducer>;


const globalStore = GlobalStore.Get();
// @ts-ignore
globalStore.RegisterStore('EnrollmentPortal',  store, [GlobalStore.AllowAll]);