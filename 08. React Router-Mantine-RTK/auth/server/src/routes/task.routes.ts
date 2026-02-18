import { Router } from "express";
import { tasks } from "../data/mockData";

const taskRoutes = Router();

taskRoutes.get("/", (req, res) => {
  if (!req.user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const userTasks = tasks.filter((task) => task.ownerId === req.user?.id);
  res.json({ tasks: userTasks });
});

export default taskRoutes;
