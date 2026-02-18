import cors from "cors";
import express from "express";
import { refreshTokenHandler, verifyAccessToken } from "./middleware/jwt.middleware";
import authRouter from "./routes/auth.routes";
import taskRoutes from "./routes/task.routes";
import userRoutes from "./routes/user.routes";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

app.post("/api/auth/refresh", refreshTokenHandler);

app.use("/api", verifyAccessToken);
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
