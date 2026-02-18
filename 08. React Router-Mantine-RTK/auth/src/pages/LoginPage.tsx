import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import { extractErrorMessage } from "../api/helpers/utils";

interface LoginPageProps {
  handleLogin: (username: string, password: string) => Promise<void>;
  isAuthLoading: boolean;
}

export default function LoginPage({
  handleLogin,
  isAuthLoading,
}: LoginPageProps) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <section>
      <LoginHeader />

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          setError("");

          try {
            await handleLogin(username, password);
            navigate("/tasks");
          } catch (submitError) {
            const message = extractErrorMessage(submitError, "Login failed");
            setError(message);
          }
        }}
      >
        <input
          id="username"
          placeholder="Username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />

        <input
          id="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button style={{ marginTop: 12 }} type="submit">
          Login
        </button>
      </form>

      {error ? <p style={{ color: "red" }}>{error}</p> : null}
      {isAuthLoading ? <p>Checking saved session...</p> : null}

      <p style={{ marginTop: 24, fontSize: 14 }}>
        Need an account?{" "}
        <Link style={{ color: "#0575f5ff" }} to="/register">
          Register
        </Link>
      </p>
    </section>
  );
}
