import React, {StrictMode} from 'react';
import MyDataPage from "./pages/MyDataPage";
import {Provider} from "react-redux";
import {store} from "./state";
import "./App.scss";

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <MyDataPage/>
      </Provider>
    </StrictMode>
  );
}

export default App;