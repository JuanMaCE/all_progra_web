import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Counter from "./Cpunter";
import Reloj from "./Clock";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Reloj />
    <Counter />
    
  </React.StrictMode>
);
