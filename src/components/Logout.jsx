import React from "react";
import { logout } from "../firebase";
import { Navigate } from "react-router-dom";

function Logout() {
  logout();
  return <Navigate to="/" />;
}

export default Logout;
