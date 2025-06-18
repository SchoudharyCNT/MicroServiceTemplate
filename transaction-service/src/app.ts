import express from "express";
import transactionRoutes from "./routes/transaction.routes";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/error.middleware";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/v1/transactions", transactionRoutes);
app.use("/healthz", (_: any, res: any) => res.send({ status: "ok" }));
app.use(errorMiddleware);

export default app;
