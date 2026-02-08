import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

export type Role = 'member' | 'leader' | 'pastor' | 'admin' | 'super_admin';

/**
 * Decorator to specify which roles are allowed to access a route
 * @param roles - Array of allowed roles
 */
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
