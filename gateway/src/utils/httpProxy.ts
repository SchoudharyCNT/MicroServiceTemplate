import httpProxy from "fastify-http-proxy";

// Helper to create a reverse proxy to another service
export function createProxy(serviceUrl: string) {
  return httpProxy({
    upstream: serviceUrl,
    prefix: "/",
    http2: false,
    rewritePrefix: "",
    // Forward original request headers
    replyOptions: { rewriteRequestHeaders: (_req, headers) => headers },
  });
}
