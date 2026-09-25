import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Szamologep from "./pages/szamologep.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Penzvalto from "./pages/penzvalto.tsx";
import Kezdolap from "./pages/kezdolap.tsx";
import NotFound from "./pages/NotFound.tsx";
import BMI from "./pages/bmi.tsx";
import Homerseklet from "./pages/homerseklet.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kezdolap />} />
        <Route path="/szamologep" element={<Szamologep />} />
        <Route path="/penzvalto" element={<Penzvalto />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/homerseklet" element={<Homerseklet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
