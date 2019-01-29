// @Author: Joni Tuhkanen
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx"
import Styles from "./styles/style.scss"
import { HashRouter, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)