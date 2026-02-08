import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  async track(type: string, entityId?: string, userId?: string) {
    await this.prisma.analyticsEvent.create({
      data: { type, entityId, userId },
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await this.prisma.analyticsDaily.upsert({
      where: {
        date_metric: {
          date: today,
          metric: type,
        },
      },
      update: { count: { increment: 1 } },
      create: {
        date: today,
        metric: type,
        count: 1,
      },
    });
  }
}
