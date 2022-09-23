import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Community, Contact, Docs, Error, Home } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/docs" exact element={<Docs />} />
        <Route path="/docs/:subpage" exact element={<Docs />} />
        <Route path="/community" exact element={<Community />} />
        <Route path="/community/:workflow_id" exact element={<Community />} />
        <Route path="*" exact element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!!hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
