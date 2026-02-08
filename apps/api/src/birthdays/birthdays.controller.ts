import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { BirthdaysService } from './birthdays.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('birthdays')
@UseGuards(AuthGuard)
export class BirthdaysController {
  constructor(private birthdays: BirthdaysService) {}

  // View today's birthdays
  @Get('today')
  today() {
    return this.birthdays.getToday();
  }

  // Bless a celebrant
  @Post(':eventId/bless/:userId')
  bless(
    @Req() req: any,
    @Param('eventId') eventId: string,
    @Param('userId') userId: string,
    @Body() body: { message?: string; verse?: string },
  ) {
    return this.birthdays.bless(
      eventId,
      req.user.id,
      userId,
      body,
    );
  }

  // Pray for celebrant
  @Post(':eventId/pray/:userId')
  pray(
    @Req() req: any,
    @Param('eventId') eventId: string,
    @Param('userId') userId: string,
  ) {
    return this.birthdays.pray(eventId, req.user.id, userId);
  }
}
