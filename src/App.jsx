import React from "react";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Logout from "./components/Logout";

function App() {
  const [user, loading, error] = useAuthState(auth);

  const navWithoutAuth = (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
  const navWithAuth = (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <BrowserRouter>
      <div>{user ? navWithAuth : navWithoutAuth}</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
