import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import type { AuthUser } from "../types/auth";

interface ProtectedRouteProps {
  user: AuthUser | null;
  isAuthLoading: boolean;
  children: ReactNode;
}

export default function ProtectedRoute({
  user,
  isAuthLoading,
  children,
}: ProtectedRouteProps) {
  if (isAuthLoading) {
    return <p>Checking auth...</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
