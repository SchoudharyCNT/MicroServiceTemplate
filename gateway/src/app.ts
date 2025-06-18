import Fastify from "fastify";
import { config } from "./config";
import jwtAuth from "./plugins/jwtAuth";
import rateLimit from "./plugins/rateLimit";

import userRoutes from "./routes/userRoutes";
import transactionRoutes from "./routes/transactionRoutes";

const app = Fastify({ logger: true });

app.register(jwtAuth);
app.register(rateLimit);

// Routes
app.register(userRoutes);
app.register(transactionRoutes);

app.get("/healthz", async () => ({ status: "ok" }));

export default app;
