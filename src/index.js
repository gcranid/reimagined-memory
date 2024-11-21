/**
 *
 * src/index.js
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import Main from "./ui/main/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
