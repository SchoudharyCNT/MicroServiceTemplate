import bcrypt from "bcrypt";
import { signToken } from "../utils/jwt.util";
import { IAuthService } from "../interfaces/auth.interface";
import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../repositories/user.repository";
import { config } from "dotenv";
config();

// Handles user signup and login logic
export class AuthService implements IAuthService {
  private repo: UserRepository;

  constructor(prisma: PrismaClient) {
    this.repo = new UserRepository(prisma);
  }

  async signup(email: string, password: string, name: string) {
    const existing = await this.repo.findByEmail(email);
    if (existing) throw new Error("Email already in use");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.repo.create({
      email,
      password: hashedPassword,
      name,
    });

    return { token: this.generateToken(user.id, user.role), user };
  }

  async login(email: string, password: string) {
    const user = await this.repo.findByEmail(email);
    if (!user) throw new Error("Invalid credentials");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid credentials");

    return { token: this.generateToken(user.id, user.role), user };
  }

  async updateProfile(id: string, data: { name?: string; password?: string }) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    return this.repo.update(id, data);
  }

  private generateToken(id: string, role: string) {
    return signToken({ id, role });
  }
}
