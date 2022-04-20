import React from "react";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import store from "./redux/store";
import { Provider } from "react-redux";
// @ts-ignore
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
);
