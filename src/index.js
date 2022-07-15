import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navigation from "./components/navigation";
import Pokemon from "./pokemon";
import About from "./about";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<About />} />
        <Route path="pokemon" element={<Pokemon />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
