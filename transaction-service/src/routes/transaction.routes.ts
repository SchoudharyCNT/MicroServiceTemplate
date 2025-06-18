import { Router } from "express";
import {
  createTransaction,
  listTransactions,
} from "../controllers/transaction.controller";
import { authenticateJWT } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", authenticateJWT, createTransaction);
router.get("/", authenticateJWT, listTransactions);

export default router;
