import Fastify from "fastify";
import { config } from "./config";
import jwtAuth from "./plugins/jwtAuth";
import rateLimit from "./plugins/rateLimit";

import userRoutes from "./routes/userRoutes";
import transactionRoutes from "./routes/transactionRoutes";

// Create the Fastify instance with logging enabled
const app = Fastify({ logger: true });

// Register common plugins
app.register(jwtAuth);
app.register(rateLimit);

// Proxy route registrations
app.register(userRoutes);
app.register(transactionRoutes);

// Simple health check route
app.get("/healthz", async () => ({ status: "ok" }));

export default app;
