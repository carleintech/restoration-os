#!/usr/bin/env tsx
/**
 * Script to get a JWT token for testing authenticated endpoints
 * Usage: pnpm tsx scripts/get-token.ts <email> <password>
 */

import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

async function getToken() {
  const email = process.argv[2];
  const password = process.argv[3];

  if (!email || !password) {
    console.error('Usage: pnpm tsx scripts/get-token.ts <email> <password>');
    console.error('Example: pnpm tsx scripts/get-token.ts user@example.com password123');
    process.exit(1);
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing required environment variables:');
    console.error('- SUPABASE_URL');
    console.error('- SUPABASE_ANON_KEY');
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Authentication error:', error.message);
      process.exit(1);
    }

    if (!data.session) {
      console.error('No session returned');
      process.exit(1);
    }

    console.log('\n✅ Authentication successful!\n');
    console.log('User ID:', data.user.id);
    console.log('Email:', data.user.email);
    console.log('\n📋 Access Token (copy this for API testing):\n');
    console.log(data.session.access_token);
    console.log('\n💡 Use this token in your requests:');
    console.log(`Authorization: Bearer ${data.session.access_token}`);
    console.log('\n🧪 Test with curl:');
    console.log(`curl -H "Authorization: Bearer ${data.session.access_token}" http://localhost:4000/auth/me`);
  } catch (err) {
    console.error('Unexpected error:', err);
    process.exit(1);
  }
}

getToken();
