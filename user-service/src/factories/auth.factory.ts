import { AuthService } from "../services/auth.service";
import { IAuthService } from "../interfaces/auth.interface";
import { prisma } from "../prisma/client";

export function createAuthService(): IAuthService {
  return new AuthService(prisma);
}
