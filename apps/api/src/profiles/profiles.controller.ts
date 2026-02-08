import {
  Controller,
  Get,
  Patch,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('profiles')
@UseGuards(AuthGuard, RolesGuard)
export class ProfilesController {
  constructor(private profiles: ProfilesService) {}

  @Get()
  @Roles('admin')
  list() {
    return this.profiles.findAll();
  }

  @Patch(':id/role')
  @Roles('super_admin')
  updateRole(
    @Param('id') id: string,
    @Body() body: { role: string },
  ) {
    return this.profiles.updateRole(id, body.role);
  }

  @Patch(':id/deactivate')
  @Roles('admin')
  deactivate(@Param('id') id: string) {
    return this.profiles.deactivate(id);
  }
}
