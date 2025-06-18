export interface CreateTransactionDto {
  amount: number;
  type: "credit" | "debit";
  description?: string;
}
