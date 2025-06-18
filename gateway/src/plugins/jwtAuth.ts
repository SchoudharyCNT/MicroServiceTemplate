import fp from "fastify-plugin";
import fastifyJwt from "fastify-jwt";
import { config } from "../config";

export default fp(async (fastify) => {
  fastify.register(fastifyJwt, { secret: config.jwtSecret });

  fastify.decorate("authenticate", async (request: any, reply: any) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
});
