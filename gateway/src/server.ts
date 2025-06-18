import app from "./app";
import { config } from "./config";

// Start the Fastify server
app.listen({ port: config.port, host: "0.0.0.0" }, (err: any) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
