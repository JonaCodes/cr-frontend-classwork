import type { AuthUser } from "../types/auth";

interface TasksHeaderProps {
  user: AuthUser | null;
  handleLogout: () => void;
}

export default function TasksHeader({ user, handleLogout }: TasksHeaderProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: 14,
      }}
    >
      <span style={{ color: "pink" }}>Logged in as {user?.username}</span>

      <span
        style={{
          cursor: "pointer",
          color: "#0575f5ff",
          textDecoration: "underline",
        }}
        onClick={handleLogout}
      >
        Logout
      </span>
    </div>
  );
}
