import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isUserLoggedIn } from "../utils/localStorage";

const ProtectedRoute = () => {
  // const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn") as string);

  return isUserLoggedIn() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
