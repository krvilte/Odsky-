import React from "react";
import { useAuth } from "../context/authContext";
import { Navigate, Outlet } from "react-router";

const requireAuth = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to={"/"} />;
};

export default requireAuth;
