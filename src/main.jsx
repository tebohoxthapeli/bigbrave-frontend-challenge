import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DataLayer } from "./context/DataLayer";
import { initialState, reducer } from "./context/reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataLayer
      initialState={initialState}
      reducer={reducer}
    >
      <App />
    </DataLayer>
  </React.StrictMode>
);
