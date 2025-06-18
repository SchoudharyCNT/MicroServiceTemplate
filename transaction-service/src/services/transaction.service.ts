import { ITransactionService } from "../interfaces/transaction.interface";
import { TransactionRepository } from "../repositories/transaction.repository";
import { PrismaClient } from "@prisma/client";

export class TransactionService implements ITransactionService {
  private repo: TransactionRepository;

  constructor(prisma: PrismaClient) {
    this.repo = new TransactionRepository(prisma);
  }

  async create(
    userId: string,
    data: { amount: number; type: string; description?: string }
  ) {
    return this.repo.create(userId, data);
  }

  async findAll(userId: string) {
    return this.repo.findAll(userId);
  }
}
