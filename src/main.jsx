import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./Config/ThemeProvider.jsx";
import { Provider } from "react-redux";
import configureStore from "./Redux/store";
import RoutesProvider from "./Config/RoutesProvider";
import "./index.css";

const store = configureStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <RoutesProvider />
    </ThemeProvider>
  </Provider>
);
