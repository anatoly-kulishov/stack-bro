import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

const app_start = (
  <>
    <div className="mock-header"/>
    <App/>
    <div className="mock-footer"/>
  </>
)

ReactDOM.render(app_start, document.getElementById('root'));