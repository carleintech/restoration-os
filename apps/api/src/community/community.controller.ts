import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CommunityService } from './community.service';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { AnalyticsService } from '../analytics/analytics.service';

@Controller('community')
@UseGuards(AuthGuard)
export class CommunityController {
  constructor(
    private community: CommunityService,
    private analytics: AnalyticsService,
  ) {}

  // Members: view feed
  @Get()
  feed() {
    return this.community.list();
  }

  // Members: create post
  @Post()
  create(@Req() req: any, @Body() body: any) {
    return this.community.create(req.user.id, body);
  }

  // Members: react
  @Post(':id/react')
  react(
    @Req() req: any,
    @Param('id') id: string,
    @Body() body: { emoji: string },
  ) {
    return this.community.react(req.user.id, id, body.emoji);
  }

  // Members: "I prayed"
  @Post(':id/pray')
  async pray(@Req() req: any, @Param('id') id: string) {
    await this.analytics.track('prayers', id, req.user.id);
    return this.community.pray(req.user.id, id);
  }

  // Leaders/Admin: moderate
  @Post(':id/hide')
  @UseGuards(RolesGuard)
  @Roles('leader', 'pastor', 'admin', 'super_admin')
  hide(@Param('id') id: string) {
    return this.community.hide(id);
  }

  @Post(':id/pin')
  @UseGuards(RolesGuard)
  @Roles('pastor', 'admin', 'super_admin')
  pin(@Param('id') id: string) {
    return this.community.pin(id);
  }
}
