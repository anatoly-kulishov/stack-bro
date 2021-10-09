import {compose, createStore} from "redux";
import reducers from "./reducers";
import {GlobalStore} from "redux-micro-frontends";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducers, composeEnhancers());

const globalStore = GlobalStore.Get();

// @ts-ignore
globalStore.RegisterStore('myData', store);
// globalStore.RegisterGlobalActions('myData', []);