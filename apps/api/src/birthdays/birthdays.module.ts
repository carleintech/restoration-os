import { Module } from '@nestjs/common';
import { BirthdaysService } from './birthdays.service';
import { BirthdaysController } from './birthdays.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [BirthdaysService],
  controllers: [BirthdaysController]
})
export class BirthdaysModule {}
