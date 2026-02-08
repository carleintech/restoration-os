export const ROLE_ORDER = [
  'member',
  'leader',
  'pastor',
  'admin',
  'super_admin',
] as const;

export type Role = typeof ROLE_ORDER[number];

export function hasRequiredRole(
  userRole: Role,
  requiredRole: Role,
): boolean {
  return (
    ROLE_ORDER.indexOf(userRole) >= ROLE_ORDER.indexOf(requiredRole)
  );
}
