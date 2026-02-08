import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class AutomationService {
  constructor(
    private prisma: PrismaService,
    private notifications: NotificationsService,
  ) {}

  private async log(job: string, status: string, message?: string) {
    await this.prisma.jobRun.create({
      data: { job, status, message },
    });
  }

  // 🕛 DAILY — BIRTHDAYS (00:05)
  @Cron('5 0 * * *')
  async birthdaysDaily() {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const event = await this.prisma.birthdayEvent.upsert({
        where: { date: today },
        update: {},
        create: { date: today },
      });

      const users = await this.prisma.profiles.findMany({
        where: { birthday: { not: null }, is_active: true },
      });

      for (const u of users) {
        const b = new Date(u.birthday!);
        if (b.getMonth() === today.getMonth() && b.getDate() === today.getDate()) {
          await this.prisma.birthdayCelebrant.upsert({
            where: {
              eventId_userId: { eventId: event.id, userId: u.id },
            },
            update: {},
            create: { eventId: event.id, userId: u.id },
          });

          await this.notifications.notify(u.id, {
            type: 'birthday',
            title: '🎉 Happy Birthday!',
            body: 'Your church family is celebrating you today.',
            link: '/birthdays/today',
          });
        }
      }

      await this.log('birthdaysDaily', 'success');
    } catch (e: any) {
      await this.log('birthdaysDaily', 'error', e.message);
    }
  }

  // 🗓️ SUNDAY REMINDER (SAT 6PM)
  @Cron('0 18 * * 6')
  async sundayReminder() {
    try {
      const msg = await this.prisma.sundayMessage.findFirst({
        where: { status: 'published' },
        orderBy: { weekOf: 'desc' },
      });
      if (!msg) return;

      const users = await this.prisma.profiles.findMany({ where: { is_active: true } });

      for (const u of users) {
        await this.notifications.notify(u.id, {
          type: 'sunday',
          title: '⛪ Sunday Is Coming',
          body: msg.title,
          link: '/sunday',
        });
      }

      await this.log('sundayReminder', 'success');
    } catch (e: any) {
      await this.log('sundayReminder', 'error', e.message);
    }
  }

  // 📖 DAILY READING PLAN REMINDER (7AM)
  @Cron('0 7 * * *')
  async readingPlanReminder() {
    try {
      const incomplete = await this.prisma.userReadingProgress.findMany({
        where: { completed: false },
      });

      for (const r of incomplete) {
        const plan = await this.prisma.readingPlan.findUnique({
          where: { id: r.planId },
        });
        if (!plan) continue;

        await this.notifications.notify(r.userId, {
          type: 'plan',
          title: '📖 Today\'s Reading',
          body: `Continue: ${plan.title}`,
          link: `/plans/${r.planId}`,
        });
      }

      await this.log('readingPlanReminder', 'success');
    } catch (e: any) {
      await this.log('readingPlanReminder', 'error', e.message);
    }
  }

  // ✈️ TRIP DEADLINE REMINDER (DAILY 9AM)
  @Cron('0 9 * * *')
  async tripReminders() {
    try {
      const trips = await this.prisma.trip.findMany({
        where: { status: 'open' },
      });

      for (const t of trips) {
        const signups = await this.prisma.tripSignup.findMany({
          where: { tripId: t.id },
        });

        for (const s of signups) {
          await this.notifications.notify(s.userId, {
            type: 'trip',
            title: '✈️ Upcoming Trip',
            body: t.title,
            link: `/trips/${t.id}`,
          });
        }
      }

      await this.log('tripReminders', 'success');
    } catch (e: any) {
      await this.log('tripReminders', 'error', e.message);
    }
  }
}
