import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function ProtectedRoute({ children }) {
  const [user, loading, error] = useAuthState(auth);
  if (loading) return;
  if (user) return children;

  return <Navigate to="/login" replace={true} />;
}
