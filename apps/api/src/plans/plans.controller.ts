import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { PlansService } from './plans.service';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('plans')
export class PlansController {
  constructor(private plans: PlansService) {}

  // Members: list plans
  @Get()
  @UseGuards(AuthGuard)
  list() {
    return this.plans.listActive();
  }

  // Pastor/Admin: create plan
  @Post()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('pastor', 'admin', 'super_admin')
  create(@Req() req: any, @Body() body: { title: string; description?: string }) {
    return this.plans.createPlan(req.user.id, body);
  }

  // Pastor/Admin: add day
  @Post(':planId/days')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('pastor', 'admin', 'super_admin')
  addDay(
    @Param('planId') planId: string,
    @Body()
    body: {
      dayIndex: number;
      bookId: number;
      chapter: number;
      verseFrom?: number;
      verseTo?: number;
    },
  ) {
    return this.plans.addDay(planId, body);
  }

  // Members: view plan details
  @Get(':planId')
  @UseGuards(AuthGuard)
  get(@Param('planId') planId: string) {
    return this.plans.getPlan(planId);
  }

  // Members: enroll
  @Post(':planId/enroll')
  @UseGuards(AuthGuard)
  enroll(@Req() req: any, @Param('planId') planId: string) {
    return this.plans.enroll(req.user.id, planId);
  }

  // Members: complete a day
  @Post(':planId/complete/:dayIndex')
  @UseGuards(AuthGuard)
  complete(
    @Req() req: any,
    @Param('planId') planId: string,
    @Param('dayIndex') dayIndex: string,
  ) {
    return this.plans.completeDay(req.user.id, planId, Number(dayIndex));
  }

  // Members: progress
  @Get(':planId/progress/me')
  @UseGuards(AuthGuard)
  progress(@Req() req: any, @Param('planId') planId: string) {
    return this.plans.progress(req.user.id, planId);
  }
}
