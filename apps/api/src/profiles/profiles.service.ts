import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}

  findById(userId: string) {
    return this.prisma.profiles.findUnique({
      where: { id: userId },
    });
  }

  findAll() {
    return this.prisma.profiles.findMany({
      orderBy: { created_at: 'desc' },
    });
  }

  updateRole(userId: string, role: string) {
    return this.prisma.profiles.update({
      where: { id: userId },
      data: { role },
    });
  }

  deactivate(userId: string) {
    return this.prisma.profiles.update({
      where: { id: userId },
      data: { is_active: false },
    });
  }
}
