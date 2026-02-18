import type { Request, Response } from "express";
import {
  createAccessToken,
  createRefreshToken,
} from "../middleware/jwt.middleware";
import { UserRepository } from "../repository/user.repository";

export class LoginController {
  constructor(private repo: UserRepository) {}

  login = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body as {
      username?: string;
      password?: string;
    };

    if (!username || !password) {
      res.status(400).json({ error: "Username and password are required" });
      return;
    }

    try {
      const user = await this.repo.authenticate(username, password);

      const accessToken = createAccessToken({
        id: user.id,
        username: user.username,
      });

      const refreshToken = createRefreshToken({
        id: user.id,
        username: user.username,
      });

      res.json({
        message: "Login successful",
        user: {
          id: user.id,
          username: user.username,
        },
        accessToken,
        refreshToken,
        expiresIn: "15m",
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Login failed";
      res.status(401).json({ error: message });
    }
  };

  register = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body as {
      username?: string;
      password?: string;
    };

    if (!username || !password) {
      res.status(400).json({ error: "Username and password are required" });
      return;
    }

    try {
      const existingUser = await this.repo.findByUsername(username);

      if (existingUser) {
        res.status(409).json({ error: "User with this username already exists" });
        return;
      }

      const newUser = await this.repo.create({
        username,
        password,
      });

      res.status(201).json({
        message: "User registered successfully",
        user: {
          id: newUser.id,
          username: newUser.username,
        },
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Register failed";
      res.status(400).json({ error: message });
    }
  };
}
