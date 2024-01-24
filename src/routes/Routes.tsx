import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "pages/HomePage";
import DodgePage from "pages/DodgePage";
import BlogPage from "pages/BlogPage";
import SingleBlogPage from "pages/SingleBlogPage";
import SecretFriendsPage from "pages/SecretFriendsPage";

const AppRoutes: React.FC<unknown> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Secrets" element={<SecretFriendsPage />} />
        <Route path="/Blogs" element={<BlogPage />} />
        <Route path="/Blogs/:id" element={<SingleBlogPage />} />
        <Route path="/Dodge" element={<DodgePage />} />
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="*" element={<Navigate replace to="/Home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
