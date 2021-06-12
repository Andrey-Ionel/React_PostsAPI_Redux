import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "./store";
import 'antd/dist/antd.css';
import ReactDOM from "react-dom";
import Uikit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.css";
import App from "./App";
Uikit.use(Icons);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
