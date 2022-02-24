import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppStateProvider from "./state/AppStateProvider";
import { Provider } from "react-redux";
import "./index.scss";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    {/* <AppStateProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </AppStateProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
