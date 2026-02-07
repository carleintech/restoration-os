import { SetMetadata } from '@nestjs/common';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Decorator to mark a route as public (no auth required)
export const Public = () => SetMetadata('isPublic', true);

// Decorator to specify required roles for a route
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

// Decorator to get the current user from the request
export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
