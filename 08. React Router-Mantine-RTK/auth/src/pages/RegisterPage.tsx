import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { extractErrorMessage } from "../api/helpers/utils";

interface RegisterPageProps {
  handleRegister: (username: string, password: string) => Promise<void>;
}

export default function RegisterPage({ handleRegister }: RegisterPageProps) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <section>
      <h1>Register</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          setError("");

          try {
            await handleRegister(username, password);
            navigate("/login");
          } catch (submitError) {
            const message = extractErrorMessage(
              submitError,
              "Registration failed",
            );
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
          Register
        </button>
      </form>

      {error ? <p style={{ color: "red" }}>{error}</p> : null}
      <p style={{ marginTop: 24, fontSize: 14 }}>
        Already registered?{" "}
        <Link style={{ color: "#0575f5ff" }} to="/login">
          Login
        </Link>
      </p>
    </section>
  );
}
