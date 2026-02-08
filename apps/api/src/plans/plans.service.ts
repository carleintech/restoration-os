import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlansService {
  constructor(private prisma: PrismaService) {}

  // Public/member: list active plans
  listActive() {
    return this.prisma.readingPlan.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  // Admin/pastor: create plan
  createPlan(userId: string, payload: { title: string; description?: string }) {
    return this.prisma.readingPlan.create({
      data: {
        title: payload.title,
        description: payload.description,
        createdBy: userId,
        isActive: true,
      },
    });
  }

  // Admin/pastor: add a day
  async addDay(
    planId: string,
    payload: {
      dayIndex: number;
      bookId: number;
      chapter: number;
      verseFrom?: number;
      verseTo?: number;
    },
  ) {
    const plan = await this.prisma.readingPlan.findUnique({ where: { id: planId } });
    if (!plan) throw new BadRequestException('Plan not found');

    return this.prisma.readingPlanDay.create({
      data: {
        planId,
        dayIndex: payload.dayIndex,
        bookId: payload.bookId,
        chapter: payload.chapter,
        verseFrom: payload.verseFrom,
        verseTo: payload.verseTo,
      },
    });
  }

  // Member: view plan with days
  getPlan(planId: string) {
    return this.prisma.readingPlan.findUnique({
      where: { id: planId },
      include: {
        days: { orderBy: { dayIndex: 'asc' } },
      },
    });
  }

  // Member: enroll (creates progress rows)
  async enroll(userId: string, planId: string) {
    const days = await this.prisma.readingPlanDay.findMany({
      where: { planId },
      orderBy: { dayIndex: 'asc' },
    });

    if (days.length === 0) throw new BadRequestException('Plan has no days yet');

    // Create progress rows idempotently
    for (const d of days) {
      await this.prisma.userReadingProgress.upsert({
        where: { userId_planId_dayIndex: { userId, planId, dayIndex: d.dayIndex } },
        update: {},
        create: { userId, planId, dayIndex: d.dayIndex, completed: false },
      });
    }

    return { ok: true, message: 'Enrolled', totalDays: days.length };
  }

  // Member: mark day complete
  completeDay(userId: string, planId: string, dayIndex: number) {
    return this.prisma.userReadingProgress.update({
      where: { userId_planId_dayIndex: { userId, planId, dayIndex } },
      data: { completed: true, completedAt: new Date() },
    });
  }

  // Member: get progress summary
  async progress(userId: string, planId: string) {
    const rows = await this.prisma.userReadingProgress.findMany({
      where: { userId, planId },
      orderBy: { dayIndex: 'asc' },
    });

    const completed = rows.filter((r) => r.completed).length;

    return {
      planId,
      totalDays: rows.length,
      completedDays: completed,
      percent: rows.length ? Math.round((completed / rows.length) * 100) : 0,
      rows,
    };
  }
}
