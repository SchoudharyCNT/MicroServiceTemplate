import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/auth.type";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

// Utility helpers for signing and verifying JWT tokens
export function signToken(payload: JwtPayload, expiresIn = "1h") {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
}
