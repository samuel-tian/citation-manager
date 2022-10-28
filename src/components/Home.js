import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function Home() {
  return (
    <div className="w-full">
      <h1>Home</h1>
    </div>
  );
}

export default Home;
