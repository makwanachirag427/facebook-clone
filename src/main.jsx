import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StateProvider } from "./components/StateProvider";
import reducer, { initialState } from "./components/Reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
