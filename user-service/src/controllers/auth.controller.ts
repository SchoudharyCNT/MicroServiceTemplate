import { Request, Response, NextFunction } from "express";
import { createAuthService } from "../factories/auth.factory";
import { AuthRequest } from "../middlewares/auth.middleware";

const authService = createAuthService();

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, name } = req.body;
    const result = await authService.signup(email, password, name);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export const updateProfile = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await authService.updateProfile(req.user!.id, req.body);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
