import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

/**
 * Creates a Supabase admin client with service role key
 * Use this for server-side operations that bypass RLS
 */
export function createSupabaseAdmin(
  configService: ConfigService,
): SupabaseClient {
  const supabaseUrl = configService.get<string>('SUPABASE_URL');
  const supabaseServiceRoleKey = configService.get<string>(
    'SUPABASE_SERVICE_ROLE_KEY',
  );

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error(
      'Missing Supabase configuration: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY',
    );
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
