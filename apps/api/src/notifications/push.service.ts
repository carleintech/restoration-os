import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as webpush from 'web-push';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PushService implements OnModuleInit {
  private readonly logger = new Logger(PushService.name);
  private enabled = false;

  constructor(
    private config: ConfigService,
    private prisma: PrismaService,
  ) {}

  onModuleInit() {
    const publicKey = this.config.get<string>('VAPID_PUBLIC_KEY');
    const privateKey = this.config.get<string>('VAPID_PRIVATE_KEY');
    const email = this.config.get<string>('VAPID_EMAIL');

    if (publicKey && privateKey && email) {
      webpush.setVapidDetails(`mailto:${email}`, publicKey, privateKey);
      this.enabled = true;
      this.logger.log('VAPID push notifications enabled');
    } else {
      this.logger.warn(
        'VAPID keys not configured — push notifications disabled',
      );
    }
  }

  /**
   * Send a push notification to all subscriptions for a user.
   */
  async sendToUser(
    userId: string,
    payload: { title: string; body: string; icon?: string; url?: string },
  ): Promise<void> {
    if (!this.enabled) return;

    const subscriptions = await this.prisma.pushSubscription.findMany({
      where: { userId },
    });

    if (subscriptions.length === 0) return;

    const notification = JSON.stringify({
      title: payload.title,
      body: payload.body,
      icon: payload.icon ?? '/icons/icon-192x192.png',
      badge: '/icons/badge-72x72.png',
      url: payload.url ?? '/',
      timestamp: Date.now(),
    });

    await Promise.allSettled(
      subscriptions.map(async (sub) => {
        try {
          await webpush.sendNotification(
            { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
            notification,
          );
          // Update last used timestamp
          await this.prisma.pushSubscription.update({
            where: { id: sub.id },
            data: { lastUsedAt: new Date() },
          });
        } catch (err: any) {
          // 410 Gone = subscription expired, remove it
          if (err?.statusCode === 410) {
            await this.prisma.pushSubscription
              .delete({ where: { id: sub.id } })
              .catch(() => {});
          } else {
            this.logger.error(`Push failed for sub ${sub.id}`, err?.message);
          }
        }
      }),
    );
  }

  /**
   * Get the VAPID public key for client-side subscription.
   */
  getPublicKey(): string | null {
    return this.config.get<string>('VAPID_PUBLIC_KEY') ?? null;
  }
}
