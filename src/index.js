import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import "./index.css";

const startApp = () => {
  ReactDOM.render(<Login />, document.getElementById("root"));
};

if (window.cordova) {
  document.addEventListener("deviceready", startApp, false);
} else {
  startApp();
}
