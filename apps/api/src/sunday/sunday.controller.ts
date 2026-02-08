import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { SundayService } from './sunday.service';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('sunday')
export class SundayController {
  constructor(private sunday: SundayService) {}

  // Public/member: get latest published
  @Get('latest')
  latest() {
    return this.sunday.getLatestPublished();
  }

  // Pastor/admin: list all
  @Get()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('pastor', 'admin', 'super_admin')
  listAll() {
    return this.sunday.listAll();
  }

  // Pastor/admin: create draft
  @Post()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('pastor', 'admin', 'super_admin')
  createDraft(@Req() req: any, @Body() body: any) {
    return this.sunday.createDraft(req.user.id, body);
  }

  // Pastor/admin: add prep prompts
  @Post(':id/prompts')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('pastor', 'admin', 'super_admin')
  addPrompt(@Param('id') id: string, @Body() body: { order: number; type: string; text: string }) {
    return this.sunday.addPrompt(id, body);
  }

  // Pastor/admin: publish
  @Post(':id/publish')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('pastor', 'admin', 'super_admin')
  publish(@Param('id') id: string) {
    return this.sunday.publish(id);
  }

  // Member: submit response / prayed tap
  @Post('responses')
  @UseGuards(AuthGuard)
  respond(@Req() req: any, @Body() body: any) {
    return this.sunday.respond(req.user.id, body);
  }
}
