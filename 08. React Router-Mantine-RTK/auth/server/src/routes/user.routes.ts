import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/me", (req, res) => {
  if (!req.user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  res.json({ user: req.user });
});

export default userRoutes;
