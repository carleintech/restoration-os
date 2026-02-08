import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from './auth.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { CurrentUser } from './decorators';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email?: string;
    role: string;
  };
}

@Controller('auth')
@UseGuards(AuthGuard, RolesGuard)
export class AuthController {
  @Get('me')
  getMe(@Req() req: AuthenticatedRequest) {
    return {
      user: req.user,
    };
  }

  @Get('test/member')
  testMember(@CurrentUser() user: any) {
    return {
      message: 'This endpoint is accessible to all authenticated users',
      user,
    };
  }

  @Get('test/pastor')
  @Roles('pastor', 'admin', 'super_admin')
  testPastor(@CurrentUser() user: any) {
    return {
      message: 'This endpoint is accessible to pastors, admins, and super admins',
      user,
    };
  }

  @Get('test/admin')
  @Roles('admin', 'super_admin')
  testAdmin(@CurrentUser() user: any) {
    return {
      message: 'This endpoint is accessible to admins and super admins only',
      user,
    };
  }
}
