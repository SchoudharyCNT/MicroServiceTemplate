import fp from "fastify-plugin";
import rateLimit from "fastify-rate-limit";

// Basic rate limiter to avoid abuse of the gateway
export default fp(async (fastify) => {
  fastify.register(rateLimit, {
    max: 100,
    timeWindow: "1 minute",
  });
});
