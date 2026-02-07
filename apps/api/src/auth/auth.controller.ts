import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { RolesGuard } from './roles.guard';
import { CurrentUser, Roles } from './decorators';

@Controller('auth')
@UseGuards(AuthGuard, RolesGuard)
export class AuthController {
  @Get('me')
  getProfile(@CurrentUser() user: any) {
    return {
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        profile: user.profile,
      },
    };
  }

  @Get('test/member')
  testMember(@CurrentUser() user: any) {
    return {
      message: 'Member access granted',
      user: { id: user.id, role: user.role },
    };
  }

  @Get('test/pastor')
  @Roles('pastor', 'admin', 'super_admin')
  testPastor(@CurrentUser() user: any) {
    return {
      message: 'Pastor access granted', 
      user: { id: user.id, role: user.role },
    };
  }

  @Get('test/admin')
  @Roles('admin', 'super_admin')
  testAdmin(@CurrentUser() user: any) {
    return {
      message: 'Admin access granted',
      user: { id: user.id, role: user.role },
    };
  }
}
