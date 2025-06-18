import { Request, Response, NextFunction } from "express";

export function errorMiddleware(
  err: any,
  _: Request,
  res: Response,
  __: NextFunction
) {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ error: message });
}
