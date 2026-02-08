import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { CurrentUser } from './decorators';

@Controller('admin')
@UseGuards(AuthGuard, RolesGuard)
export class AdminTestController {
  @Get('secret')
  @Roles('admin', 'super_admin', 'pastor')
  getAdminSecret(@CurrentUser() user: any) {
    return {
      message: 'This is a secret admin endpoint',
      secret: 'The password is: restoration2025',
      user,
    };
  }
}
