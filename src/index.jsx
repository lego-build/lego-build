import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact, Docs } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/docs" exact element={<Docs />} />
        <Route path="/docs/:subpage" exact element={<Docs />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
