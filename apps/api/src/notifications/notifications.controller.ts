import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { NotificationsService } from './notifications.service';
import { PushService } from './push.service';

@Controller('notifications')
@UseGuards(AuthGuard)
export class NotificationsController {
  constructor(
    private readonly notifications: NotificationsService,
    private readonly push: PushService,
  ) {}

  // GET /notifications — list recent notifications
  @Get()
  list(@Req() req: any, @Query('limit') limit?: string) {
    return this.notifications.listForUser(
      req.user.id,
      limit ? parseInt(limit, 10) : 50,
    );
  }

  // GET /notifications/unread-count — badge count
  @Get('unread-count')
  unreadCount(@Req() req: any) {
    return this.notifications.getUnreadCount(req.user.id).then((count) => ({
      count,
    }));
  }

  // POST /notifications/:id/read — mark single as read
  @Post(':id/read')
  markRead(@Req() req: any, @Param('id') id: string) {
    return this.notifications.markRead(req.user.id, id);
  }

  // POST /notifications/read-all — mark all as read
  @Post('read-all')
  markAllRead(@Req() req: any) {
    return this.notifications.markAllRead(req.user.id);
  }

  // DELETE /notifications/:id — dismiss
  @Delete(':id')
  dismiss(@Req() req: any, @Param('id') id: string) {
    return this.notifications.dismiss(req.user.id, id);
  }

  // GET /notifications/preferences
  @Get('preferences')
  getPreferences(@Req() req: any) {
    return this.notifications.getOrCreatePreferences(req.user.id);
  }

  // PUT /notifications/preferences
  @Put('preferences')
  updatePreferences(
    @Req() req: any,
    @Body() body: Record<string, unknown>,
  ) {
    return this.notifications.updatePreferences(req.user.id, body);
  }

  // GET /notifications/push/vapid-key — client needs this to subscribe
  @Get('push/vapid-key')
  vapidKey() {
    return { publicKey: this.push.getPublicKey() };
  }

  // POST /notifications/push/subscribe
  @Post('push/subscribe')
  subscribePush(
    @Req() req: any,
    @Body() body: { endpoint: string; p256dh: string; auth: string; userAgent?: string },
  ) {
    return this.notifications.savePushSubscription(req.user.id, body);
  }

  // DELETE /notifications/push/subscribe
  @Delete('push/subscribe')
  unsubscribePush(
    @Req() req: any,
    @Body() body: { endpoint: string },
  ) {
    return this.notifications.removePushSubscription(req.user.id, body.endpoint);
  }
}
