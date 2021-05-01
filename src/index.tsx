import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from "./store";
import App from "./components/App";

const app = (
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>
)

ReactDOM.render(app, document.getElementById('root'));