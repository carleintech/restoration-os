import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AdminTestController } from './admin-test.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { RolesGuard } from './roles.guard';

@Module({
  controllers: [AuthController, AdminTestController],
  providers: [AuthService, AuthGuard, RolesGuard],
  exports: [AuthService, AuthGuard, RolesGuard],
})
export class AuthModule {}

