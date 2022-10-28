import React, { Component } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import useToken from "./hooks/useToken";

const PrivateRoute = () => {
  /* const { token, setToken } = useToken(); */
  const { token, setToken } = useToken();
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
