import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface AuthTokenPayload {
  id: string;
  username: string;
}

const ACCESS_TOKEN_SECRET =
  process.env.ACCESS_TOKEN_SECRET || "access_secret_key";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "refresh_secret_key";
const ACCESS_TOKEN_EXPIRY = "15m";
const REFRESH_TOKEN_EXPIRY = "7d";

export const createAccessToken = (payload: {
  id: string;
  username: string;
}): string => {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
  });
};

export const createRefreshToken = (payload: {
  id: string;
  username: string;
}): string => {
  return jwt.sign(payload, REFRESH_TOKEN_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRY,
  });
};

export const verifyAccessToken = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Access token is missing" });
    return;
  }

  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET) as AuthTokenPayload;
    // @ts-expect-error: all good
    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      res.status(401).json({ error: "Access token expired" });
      return;
    }

    res.status(403).json({ error: "Invalid access token" });
  }
};

export const verifyRefreshToken = (token: string): AuthTokenPayload => {
  try {
    return jwt.verify(token, REFRESH_TOKEN_SECRET) as AuthTokenPayload;
  } catch {
    throw new Error("Invalid or expired refresh token");
  }
};

export const refreshTokenHandler = (req: Request, res: Response): void => {
  const { refreshToken } = req.body as { refreshToken?: string };

  if (!refreshToken) {
    res.status(401).json({ error: "Refresh token is missing" });
    return;
  }

  try {
    const decoded = verifyRefreshToken(refreshToken);

    if (!decoded) {
      res.status(403).json({ error: "Invalid refresh token" });
      return;
    }

    const newAccessToken = createAccessToken(decoded);
    const newRefreshToken = createRefreshToken(decoded);

    res.json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
      expiresIn: ACCESS_TOKEN_EXPIRY,
    });
  } catch {
    res.status(403).json({ error: "Invalid refresh token" });
  }
};
