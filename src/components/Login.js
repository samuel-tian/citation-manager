import React, { useEffect, useState } from "react";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);

  return (
    <div className="flex flex-col items-center">
      <h1>Log In</h1>
      <p>Username</p>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
      />
      <p>Password</p>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <div>
        <button
          type="submit"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Submit
        </button>
      </div>
      <div>
        <Link to="/reset"></Link>
      </div>
      <div>
        Don't have an account? <Link to="/register">Register</Link> now!
      </div>
    </div>
  );
}

export default Login;
