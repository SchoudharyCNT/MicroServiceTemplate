import { FastifyInstance } from "fastify";
import { config } from "../config";
import { createProxy } from "../utils/httpProxy";

export default async function transactionRoutes(fastify: FastifyInstance) {
  fastify.register(createProxy(config.transactionServiceUrl), {
    prefix: "/v1/transactions",
  });
}
