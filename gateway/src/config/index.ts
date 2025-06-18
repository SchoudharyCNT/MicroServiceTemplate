import dotenv from "dotenv";

// Load environment variables once on startup
dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || "3000"),
  jwtSecret: process.env.JWT_SECRET!,
  userServiceUrl: process.env.USER_SERVICE_URL!,
  transactionServiceUrl: process.env.TRANSACTION_SERVICE_URL!,
};
