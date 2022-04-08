import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ThemeProvider } from "./store/theme-context";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);