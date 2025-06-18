import express from "express";
import authRoutes from "./routes/auth.routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/v1/users", authRoutes);
app.use(errorMiddleware);
app.get("/healthz", (_, res) => res.send({ status: "ok" }));

export default app;
