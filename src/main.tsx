import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App.tsx";
import React from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
