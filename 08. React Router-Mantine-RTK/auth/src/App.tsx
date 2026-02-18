import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { fetchCurrentUser, loginUser, registerUser } from "./api/authApi";
import { tokenStorage } from "./api/helpers/tokenStorage";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TasksPage from "./pages/TasksPage";
import type { AuthUser } from "./types/auth";

interface HomeRedirectProps {
  user: AuthUser | null;
  isAuthLoading: boolean;
}

function HomeRedirect({ user, isAuthLoading }: HomeRedirectProps) {
  if (isAuthLoading) {
    return <p>Loading...</p>;
  }

  return <Navigate to={user ? "/tasks" : "/login"} />;
}

function App() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const runAuth = async () => {
      const accessToken = tokenStorage.getAccessToken();
      const refreshToken = tokenStorage.getRefreshToken();

      if (!accessToken || !refreshToken) {
        setIsAuthLoading(false);
        return;
      }

      try {
        const response = await fetchCurrentUser();
        setUser(response.user);
      } catch {
        tokenStorage.clearTokens();
        setUser(null);
      } finally {
        setIsAuthLoading(false);
      }
    };

    runAuth();
  }, []);

  const handleLogin = async (username: string, password: string) => {
    const response = await loginUser({ username, password });
    tokenStorage.setTokens(response.accessToken, response.refreshToken);
    setUser(response.user);
  };

  const handleRegister = async (username: string, password: string) => {
    await registerUser({ username, password });
  };

  const handleLogout = () => {
    tokenStorage.clearTokens();
    setUser(null);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<HomeRedirect user={user} isAuthLoading={isAuthLoading} />}
      />
      <Route
        path="/login"
        element={
          <LoginPage handleLogin={handleLogin} isAuthLoading={isAuthLoading} />
        }
      />
      <Route
        path="/register"
        element={<RegisterPage handleRegister={handleRegister} />}
      />
      <Route
        path="/tasks"
        element={
          <ProtectedRoute user={user} isAuthLoading={isAuthLoading}>
            <TasksPage user={user} onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
