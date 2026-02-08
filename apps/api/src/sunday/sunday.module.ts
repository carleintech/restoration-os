import { Module } from '@nestjs/common';
import { SundayService } from './sunday.service';
import { SundayController } from './sunday.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [SundayService],
  controllers: [SundayController]
})
export class SundayModule {}
