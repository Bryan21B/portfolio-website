import "./index.css";

import App from "./App.tsx";
import React from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  // @ts-ignore
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
