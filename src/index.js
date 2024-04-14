import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { StyleProvider } from "@ant-design/cssinjs";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <StyleProvider hashPriority="high">
      <App></App>
    </StyleProvider>
  </Provider>
);
