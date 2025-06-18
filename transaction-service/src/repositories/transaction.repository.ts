import { PrismaClient } from "@prisma/client";

export class TransactionRepository {
  constructor(private prisma: PrismaClient) {}

  async create(
    userId: string,
    data: { amount: number; type: string; description?: string }
  ) {
    return this.prisma.transaction.create({
      data: {
        userId,
        amount: data.amount,
        type: data.type,
        description: data.description,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.transaction.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  }
}
