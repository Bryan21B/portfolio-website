import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App.tsx";
import NotFound from "./pages/NotFound.tsx";
import React from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
