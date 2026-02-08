import { jwtVerify, JWTVerifyResult, createRemoteJWKSet } from 'jose';

export interface SupabaseJwtPayload {
  sub: string; // User ID
  email?: string;
  phone?: string;
  app_metadata?: {
    provider?: string;
    providers?: string[];
    role?: string;
  };
  user_metadata?: Record<string, any>;
  role?: string;
  aal?: string;
  amr?: Array<{ method: string; timestamp: number }>;
  session_id?: string;
  iss?: string;
  aud?: string;
  exp?: number;
  iat?: number;
}

/**
 * Verifies a Supabase JWT token using JWKS
 * @param token - The JWT token to verify
 * @param jwksUrl - The JWKS URL from Supabase
 * @returns Decoded and verified JWT payload
 */
export async function verifySupabaseJwt(
  token: string,
  jwksUrl: string,
): Promise<JWTVerifyResult<SupabaseJwtPayload>> {
  const JWKS = createRemoteJWKSet(new URL(jwksUrl));

  // Extract base URL from JWKS URL (e.g., https://project.supabase.co)
  const url = new URL(jwksUrl);
  const baseUrl = `${url.protocol}//${url.host}`;
  const issuer = `${baseUrl}/auth/v1`;

  return await jwtVerify<SupabaseJwtPayload>(token, JWKS, {
    issuer,
  });
}
