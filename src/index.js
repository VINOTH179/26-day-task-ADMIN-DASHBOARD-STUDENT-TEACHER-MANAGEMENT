import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./context/AppProvider";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import LoginReducer from "./Reducers/LoginReducer";
import SignupReducer from "./Reducers/SignupReducer";

const store = configureStore({
  reducer: {
    loginInfo : LoginReducer,
    signupInfo : SignupReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store = {store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();