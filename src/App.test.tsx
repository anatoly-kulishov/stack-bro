import React from 'react';
import ReactDOM from 'react-dom';
import StackBroTSApp from "./App";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StackBroTSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
