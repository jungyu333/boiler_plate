import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

root.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(Reducer)}>
      <App />
    </Provider>
  </React.StrictMode>
);
