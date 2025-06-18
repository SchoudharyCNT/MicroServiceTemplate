export interface ITransactionService {
  create(
    userId: string,
    data: { amount: number; type: string; description?: string }
  ): Promise<any>;
  findAll(userId: string): Promise<any[]>;
}
