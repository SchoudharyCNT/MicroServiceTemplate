import httpProxy from "fastify-http-proxy";

export function createProxy(serviceUrl: string) {
  return httpProxy({
    upstream: serviceUrl,
    prefix: "/",
    http2: false,
    rewritePrefix: "",
    replyOptions: { rewriteRequestHeaders: (req, headers) => headers },
  });
}
