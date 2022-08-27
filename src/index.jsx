import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Community, Contact, Docs } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/docs" exact element={<Docs />} />
        <Route path="/docs/:subpage" exact element={<Docs />} />
        <Route path="/community" exact element={<Community />} />
        <Route path="/community/:workflow_id" exact element={<Community />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
