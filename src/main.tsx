import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/variables-p3.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
