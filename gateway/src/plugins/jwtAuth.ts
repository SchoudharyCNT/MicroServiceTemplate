import fp from "fastify-plugin";
import fastifyJwt from "fastify-jwt";
import { config } from "../config";

// Plugin to register JWT support on the gateway
export default fp(async (fastify) => {
  // Provide jwt utilities like request.jwtVerify()
  fastify.register(fastifyJwt, { secret: config.jwtSecret });

  // Decorate fastify instance with an authenticate method
  fastify.decorate("authenticate", async (request: any, reply: any) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
});
