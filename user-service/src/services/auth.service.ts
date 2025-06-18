import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IAuthService } from "../interfaces/auth.interface";
import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";
config();

export class AuthService implements IAuthService {
  constructor(private prisma: PrismaClient) {}

  async signup(email: string, password: string, name: string) {
    const existing = await this.prisma.user.findUnique({ where: { email } });
    if (existing) throw new Error("Email already in use");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.prisma.user.create({
      data: { email, password: hashedPassword, name },
    });

    return { token: this.generateToken(user.id, user.role), user };
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("Invalid credentials");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid credentials");

    return { token: this.generateToken(user.id, user.role), user };
  }

  private generateToken(id: string, role: string) {
    return jwt.sign({ id, role }, process.env.JWT_SECRET!, { expiresIn: "1h" });
  }
}
