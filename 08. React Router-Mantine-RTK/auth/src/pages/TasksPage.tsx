import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchTasks } from "../api/authApi";
import type { AuthUser, TasksResponse } from "../types/auth";
import TasksHeader from "./TasksHeader";
import { extractErrorMessage } from "../api/helpers/utils";

interface TasksPageProps {
  user: AuthUser | null;
  onLogout: () => void;
}

export default function TasksPage({ user, onLogout }: TasksPageProps) {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<TasksResponse["tasks"]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const response = await fetchTasks();
        setTasks(response.tasks);
      } catch (loadError) {
        const message = extractErrorMessage(loadError, "Failed to load tasks");
        setError(message);
      }
    };

    void loadTasks();
  }, []);

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <section>
      <TasksHeader user={user} handleLogout={handleLogout} />
      <h1>Tasks</h1>

      {error ? <p>{error}</p> : null}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.status}
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p style={{ color: "gray" }}>
          No tasks found for {user?.username}. Maybe we should fire them.
        </p>
      )}
    </section>
  );
}
