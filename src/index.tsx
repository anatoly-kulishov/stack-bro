import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import store from "./store";
import App from "./components/App";
import "./assets/css/normalize.css";
import "./assets/css/bootstrap-grid.min.css";

const app = (
    <StrictMode>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </StrictMode>
)

ReactDOM.render(app, document.getElementById('root'));