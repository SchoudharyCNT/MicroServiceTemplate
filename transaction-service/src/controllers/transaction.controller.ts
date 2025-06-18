import { Request, Response, NextFunction } from "express";
import { TransactionService } from "../services/transaction.service";
import { prisma } from "../prisma/client";
import { AuthRequest } from "../middlewares/auth.middleware";

const transactionService = new TransactionService(prisma);

export const createTransaction = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user!.id;
    const transaction = await transactionService.create(userId, req.body);
    res.status(201).json(transaction);
  } catch (err) {
    next(err);
  }
};

export const listTransactions = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user!.id;
    const transactions = await transactionService.findAll(userId);
    res.status(200).json(transactions);
  } catch (err) {
    next(err);
  }
};
