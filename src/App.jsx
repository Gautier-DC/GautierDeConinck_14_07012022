import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import Header from "./Components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

