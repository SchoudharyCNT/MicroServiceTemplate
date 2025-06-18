import { PrismaClient, User } from "@prisma/client";

export class UserRepository {
  constructor(private prisma: PrismaClient) {}

  create(data: { email: string; password: string; name: string; role?: string }) {
    return this.prisma.user.create({ data });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: string, data: { name?: string; password?: string }) {
    return this.prisma.user.update({ where: { id }, data });
  }
}
