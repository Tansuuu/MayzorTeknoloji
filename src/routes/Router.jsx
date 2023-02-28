import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { UserOperations } from "../pages/UserOperations";
import { EditPage } from "../pages/EditPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/user" element={<UserOperations />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  );
}
