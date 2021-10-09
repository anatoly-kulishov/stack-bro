import React from 'react';
import App from './App';
import ReactWebComponent from "react-web-component";

if (process.env.REACT_APP_WEB_COMPONENT_NAME) {
    ReactWebComponent.create(<App/>, process.env.REACT_APP_WEB_COMPONENT_NAME, false);
}