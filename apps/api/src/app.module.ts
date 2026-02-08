import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ProfilesModule } from './profiles/profiles.module';
import { BibleModule } from './bible/bible.module';
import { SundayModule } from './sunday/sunday.module';
import { CommunityModule } from './community/community.module';
import { BirthdaysModule } from './birthdays/birthdays.module';
import { TripsModule } from './trips/trips.module';
import { PlansModule } from './plans/plans.module';
import { JournalModule } from './journal/journal.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AutomationModule } from './automation/automation.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    PrismaModule,
    AuthModule,
    ProfilesModule,
    BibleModule,
    SundayModule,
    CommunityModule,
    BirthdaysModule,
    TripsModule,
    PlansModule,
    JournalModule,
    NotificationsModule,
    AutomationModule,
    AnalyticsModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
