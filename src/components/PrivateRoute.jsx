import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";

const PrivateRoute = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const [name, setName] = useState();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    console.log(user);
    if (!user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
