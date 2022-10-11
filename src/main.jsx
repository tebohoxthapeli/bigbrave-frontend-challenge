import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { DataLayer } from "./context/DataLayer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataLayer>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </DataLayer>
  </React.StrictMode>
);
