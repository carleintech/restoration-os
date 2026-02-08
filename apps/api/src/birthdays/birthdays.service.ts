import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BirthdaysService {
  constructor(private prisma: PrismaService) {}

  // Get today's birthday event (or upcoming)
  async getToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.prisma.birthdayEvent.findUnique({
      where: { date: today },
      include: {
        celebrants: true,
      },
    });
  }

  // Ensure birthday event exists for date
  async ensureEvent(date: Date) {
    return this.prisma.birthdayEvent.upsert({
      where: { date },
      update: {},
      create: { date },
    });
  }

  // Register celebrant
  async registerCelebrant(eventId: string, userId: string) {
    return this.prisma.birthdayCelebrant.upsert({
      where: {
        eventId_userId: { eventId, userId },
      },
      update: {},
      create: { eventId, userId },
    });
  }

  // Bless someone
  async bless(eventId: string, fromUser: string, toUser: string, payload: any) {
    return this.prisma.birthdayBlessing.create({
      data: {
        eventId,
        fromUser,
        toUser,
        message: payload.message,
        verse: payload.verse,
      },
    });
  }

  // Pray for celebrant
  async pray(eventId: string, userId: string, prayedFor: string) {
    return this.prisma.birthdayPrayer.upsert({
      where: {
        eventId_userId_prayedFor: {
          eventId,
          userId,
          prayedFor,
        },
      },
      update: {},
      create: { eventId, userId, prayedFor },
    });
  }
}
