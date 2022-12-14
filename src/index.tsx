import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import { Provider as ReduxProvider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { Router } from "./Router";
import styles from "./App.styles";
import { store } from "./store/app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router />
    </ReduxProvider>
    <Global styles={styles.global} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
