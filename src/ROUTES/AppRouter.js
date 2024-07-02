import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import RegistrationForm from "../JS/RegistrationForm";
import UserDetails from "../JS/UserDetails";
import HomePage from "../JS/HomePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/userdetails" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
