declare module 'express' {
  export interface Request {
    headers: any;
    body?: any;
  }
  export interface Response {
    status(code: number): Response;
    json(data: any): Response;
    send(data: any): Response;
  }
  export type NextFunction = (err?: any) => void;
  export function Router(): any;
  const e: any;
  export default e;
}

declare module 'fastify' {
  export interface FastifyInstance {
    register?: any;
  }
  const fastify: any;
  export default fastify;
}

declare module 'fastify-plugin' {
  const plugin: any;
  export default plugin;
}

declare module 'fastify-jwt' {
  const fastifyJwt: any;
  export default fastifyJwt;
}

declare module 'fastify-rate-limit' {
  const rateLimit: any;
  export default rateLimit;
}

declare module 'fastify-http-proxy' {
  const httpProxy: any;
  export default httpProxy;
}

declare module 'dotenv' {
  export function config(): void;
}

declare module 'winston' {
  const winston: any;
  export default winston;
}

declare module 'jsonwebtoken' {
  export function sign(payload: any, secret: any, options?: any): string;
  export function verify(token: any, secret: any): any;
}

declare module 'bcrypt' {
  export function hash(data: any, salt: any): Promise<string>;
  export function compare(data: any, encrypted: any): Promise<boolean>;
}

declare module '@prisma/client' {
  export class PrismaClient {
    [key: string]: any;
  }
  export interface User {
    [key: string]: any;
  }
}

declare var process: any;
