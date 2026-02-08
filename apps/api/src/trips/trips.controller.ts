import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { TripsService } from './trips.service';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('trips')
@UseGuards(AuthGuard)
export class TripsController {
  constructor(private trips: TripsService) {}

  @Get()
  list() {
    return this.trips.list();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.trips.getById(id);
  }

  // Leaders create trips
  @Post()
  @UseGuards(RolesGuard)
  @Roles('leader', 'pastor', 'admin', 'super_admin')
  create(@Req() req: any, @Body() body: any) {
    return this.trips.create(req.user.id, body);
  }

  // Leaders update trip status
  @Patch(':id/status')
  @UseGuards(RolesGuard)
  @Roles('leader', 'pastor', 'admin', 'super_admin')
  setStatus(@Param('id') id: string, @Body() body: { status: string }) {
    return this.trips.setStatus(id, body.status);
  }

  // Members express interest (demand signal)
  @Post(':id/interest')
  interest(
    @Req() req: any,
    @Param('id') id: string,
    @Body() body: { level: string },
  ) {
    return this.trips.interest(req.user.id, id, body.level);
  }

  // Members sign up when open
  @Post(':id/signup')
  signup(@Req() req: any, @Param('id') id: string) {
    return this.trips.signup(req.user.id, id);
  }

  // Members ask questions
  @Post(':id/questions')
  ask(@Req() req: any, @Param('id') id: string, @Body() body: { question: string }) {
    return this.trips.ask(req.user.id, id, body.question);
  }

  // Leaders answer questions
  @Post('questions/:qid/answer')
  @UseGuards(RolesGuard)
  @Roles('leader', 'pastor', 'admin', 'super_admin')
  answer(@Req() req: any, @Param('qid') qid: string, @Body() body: { answer: string }) {
    return this.trips.answer(req.user.id, qid, body.answer);
  }
}
