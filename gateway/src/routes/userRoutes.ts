import { FastifyInstance } from "fastify";
import { config } from "../config";
import { createProxy } from "../utils/httpProxy";

export default async function userRoutes(fastify: FastifyInstance) {
  fastify.register(createProxy(config.userServiceUrl), { prefix: "/v1/users" });
}
