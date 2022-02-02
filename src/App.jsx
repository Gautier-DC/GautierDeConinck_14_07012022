import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CurrentEmployees from "./pages/CurrentEmployees";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/employee-list" element={<CurrentEmployees />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

