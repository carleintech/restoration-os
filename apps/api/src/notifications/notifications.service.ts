import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  NotificationCategory,
  NotificationPriority,
  NotificationChannel,
  NotificationStatus,
} from '@prisma/client';

export interface NotifyPayload {
  category: NotificationCategory;
  priority?: NotificationPriority;
  channel?: NotificationChannel;
  title: string;
  body: string;
  deepLink?: string;
  imageUrl?: string;
  dedupeKey?: string;
  expiresAt?: Date;
  data?: Record<string, unknown>;
}

// Rate limits per category per day
const DAILY_LIMITS: Record<NotificationCategory, number> = {
  SUNDAY_PREP: 3,
  BIBLE_DEVOTION: 3,
  PRAYER_PRAISE: 10,
  BIRTHDAY: 5,
  GROUP: 10,
  TRIP: 5,
  ADMIN: 20,
};

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Core notify method — respects preferences, quiet hours, deduplication, and rate limits.
   */
  async notify(userId: string, payload: NotifyPayload): Promise<boolean> {
    try {
      // 1. Check user preferences
      const prefs = await this.getOrCreatePreferences(userId);

      // 2. Check category is enabled
      if (!this.isCategoryEnabled(prefs, payload.category)) {
        this.logger.debug(
          `Skipping notification: category ${payload.category} disabled for ${userId}`,
        );
        return false;
      }

      // 3. P0 critical notifications bypass quiet hours and rate limits
      const priority = payload.priority ?? NotificationPriority.P2_NORMAL;
      if (priority !== NotificationPriority.P0_CRITICAL) {
        // 4. Check quiet hours
        if (prefs.quietHoursEnabled && this.isInQuietHours(prefs)) {
          this.logger.debug(`Skipping notification: quiet hours for ${userId}`);
          return false;
        }

        // 5. Check rate limit
        if (!(await this.checkRateLimit(userId, payload.category))) {
          this.logger.debug(
            `Skipping notification: rate limit hit for ${userId} / ${payload.category}`,
          );
          return false;
        }
      }

      // 6. Deduplication check
      if (payload.dedupeKey) {
        const existing = await this.prisma.notification.findFirst({
          where: {
            dedupeKey: payload.dedupeKey,
            createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
          },
        });
        if (existing) {
          this.logger.debug(
            `Skipping notification: duplicate key ${payload.dedupeKey}`,
          );
          return false;
        }
      }

      // 7. Create notification
      await this.prisma.notification.create({
        data: {
          userId,
          category: payload.category,
          priority,
          channel: payload.channel ?? NotificationChannel.IN_APP,
          status: NotificationStatus.SENT,
          title: payload.title,
          body: payload.body,
          deepLink: payload.deepLink,
          imageUrl: payload.imageUrl,
          dedupeKey: payload.dedupeKey,
          expiresAt: payload.expiresAt,
          data: payload.data ?? {},
          sentAt: new Date(),
        },
      });

      return true;
    } catch (err) {
      this.logger.error(`Failed to create notification for ${userId}`, err);
      return false;
    }
  }

  /**
   * Send to multiple users at once (e.g., Sunday prep blast).
   */
  async notifyMany(userIds: string[], payload: NotifyPayload): Promise<void> {
    await Promise.allSettled(userIds.map((id) => this.notify(id, payload)));
  }

  /**
   * List notifications for a user.
   */
  async listForUser(userId: string, limit = 50) {
    return this.prisma.notification.findMany({
      where: {
        userId,
        status: { notIn: [NotificationStatus.DISMISSED] },
        OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }

  /**
   * Unread count for badge.
   */
  async getUnreadCount(userId: string): Promise<number> {
    return this.prisma.notification.count({
      where: {
        userId,
        status: {
          notIn: [NotificationStatus.READ, NotificationStatus.DISMISSED],
        },
        OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
      },
    });
  }

  /**
   * Mark a single notification as read.
   */
  async markRead(userId: string, notificationId: string) {
    return this.prisma.notification.updateMany({
      where: { id: notificationId, userId },
      data: { status: NotificationStatus.READ, readAt: new Date() },
    });
  }

  /**
   * Mark all notifications as read.
   */
  async markAllRead(userId: string) {
    return this.prisma.notification.updateMany({
      where: {
        userId,
        status: {
          notIn: [NotificationStatus.READ, NotificationStatus.DISMISSED],
        },
      },
      data: { status: NotificationStatus.READ, readAt: new Date() },
    });
  }

  /**
   * Dismiss a notification.
   */
  async dismiss(userId: string, notificationId: string) {
    return this.prisma.notification.updateMany({
      where: { id: notificationId, userId },
      data: { status: NotificationStatus.DISMISSED, dismissedAt: new Date() },
    });
  }

  // ─── Preferences ───────────────────────────────────────────────────────────

  async getOrCreatePreferences(userId: string) {
    const existing = await this.prisma.userNotificationPreferences.findUnique({
      where: { userId },
    });
    if (existing) return existing;

    return this.prisma.userNotificationPreferences.create({
      data: { userId },
    });
  }

  async updatePreferences(userId: string, updates: Record<string, unknown>) {
    return this.prisma.userNotificationPreferences.upsert({
      where: { userId },
      create: { userId, ...updates },
      update: { ...updates, updatedAt: new Date() },
    });
  }

  // ─── Push Subscriptions ────────────────────────────────────────────────────

  async savePushSubscription(
    userId: string,
    sub: { endpoint: string; p256dh: string; auth: string; userAgent?: string },
  ) {
    return this.prisma.pushSubscription.upsert({
      where: { endpoint: sub.endpoint },
      create: { userId, ...sub },
      update: { userId, lastUsedAt: new Date() },
    });
  }

  async removePushSubscription(userId: string, endpoint: string) {
    return this.prisma.pushSubscription.deleteMany({
      where: { userId, endpoint },
    });
  }

  async getPushSubscriptions(userId: string) {
    return this.prisma.pushSubscription.findMany({ where: { userId } });
  }

  // ─── Anti-spam helpers ─────────────────────────────────────────────────────

  private isCategoryEnabled(
    prefs: Awaited<ReturnType<typeof this.getOrCreatePreferences>>,
    category: NotificationCategory,
  ): boolean {
    const map: Record<NotificationCategory, boolean> = {
      SUNDAY_PREP: prefs.sundayPrepEnabled,
      BIBLE_DEVOTION: prefs.bibleDevotionEnabled,
      PRAYER_PRAISE: prefs.prayerPraiseEnabled,
      BIRTHDAY: prefs.birthdayEnabled,
      GROUP: prefs.groupEnabled,
      TRIP: prefs.tripEnabled,
      ADMIN: prefs.adminEnabled,
    };
    return map[category] ?? true;
  }

  private isInQuietHours(
    prefs: Awaited<ReturnType<typeof this.getOrCreatePreferences>>,
  ): boolean {
    const now = new Date();
    const hour = now.getHours();
    const { quietHoursStart, quietHoursEnd } = prefs;

    // Handle wrap-around (e.g., 22 → 7)
    if (quietHoursStart > quietHoursEnd) {
      return hour >= quietHoursStart || hour < quietHoursEnd;
    }
    return hour >= quietHoursStart && hour < quietHoursEnd;
  }

  private async checkRateLimit(
    userId: string,
    category: NotificationCategory,
  ): Promise<boolean> {
    const limit = DAILY_LIMITS[category] ?? 10;
    const since = new Date();
    since.setHours(0, 0, 0, 0);

    const count = await this.prisma.notification.count({
      where: {
        userId,
        category,
        createdAt: { gte: since },
      },
    });

    return count < limit;
  }
}
