import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  _: Request,
  res: Response,
  __: NextFunction
) {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  res.status(status).json({ error: message });
}
