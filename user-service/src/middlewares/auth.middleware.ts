import { Request, Response, NextFunction } from "express";
import { verifyToken } from "@shared/utils/jwt";
import { JwtPayload } from "@shared/types/auth.type";

export interface AuthRequest extends Request {
  user?: JwtPayload;
}

export function authenticateJWT(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Missing token" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch {
    return res.status(403).json({ error: "Invalid token" });
  }
}
