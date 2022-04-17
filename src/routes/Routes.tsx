import { BrowserRouter as Router, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage";
import DodgePage from "../pages/DodgePage";
import BlogPage from "../pages/BlogPage";

const AppRoutes: React.FC<unknown> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Blogs" element={<BlogPage />} />
        <Route path="/Dodge" element={<DodgePage />} />
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="*" element={<Navigate replace to="/Home" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
