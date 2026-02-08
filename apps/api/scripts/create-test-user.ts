#!/usr/bin/env tsx
/**
 * Script to create a test user with both Auth and Profile
 * Usage: pnpm tsx scripts/create-test-user.ts <email> <password> <full_name> [role]
 */

import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createTestUser() {
  const email = process.argv[2];
  const password = process.argv[3];
  const fullName = process.argv[4];
  const role = process.argv[5] || 'member';

  if (!email || !password || !fullName) {
    console.error('Usage: pnpm tsx scripts/create-test-user.ts <email> <password> <full_name> [role]');
    console.error('Example: pnpm tsx scripts/create-test-user.ts test@restoration.church password123 "Test User" member');
    console.error('\nAvailable roles: member, pastor, admin, super_admin');
    process.exit(1);
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing required environment variables:');
    console.error('- SUPABASE_URL');
    console.error('- SUPABASE_SERVICE_ROLE_KEY');
    process.exit(1);
  }

  // Use service role key to create users
  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  try {
    console.log('\n🔨 Creating user in Supabase Auth...');

    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm email
    });

    if (authError) {
      console.error('❌ Error creating auth user:', authError.message);
      process.exit(1);
    }

    if (!authData.user) {
      console.error('❌ No user data returned');
      process.exit(1);
    }

    console.log('✅ Auth user created!');
    console.log('   User ID:', authData.user.id);
    console.log('   Email:', authData.user.email);

    console.log('\n🔨 Creating profile in database...');

    // Create profile in database
    const profile = await prisma.profiles.create({
      data: {
        id: authData.user.id,
        email: email,
        full_name: fullName,
        role: role,
        is_active: true,
      },
    });

    console.log('✅ Profile created!');
    console.log('   Profile ID:', profile.id);
    console.log('   Name:', profile.full_name);
    console.log('   Role:', profile.role);

    console.log('\n✨ User creation complete!\n');
    console.log('📋 Login Credentials:');
    console.log('   Email:', email);
    console.log('   Password:', password);
    console.log('\n🔗 You can now login at: http://localhost:3001/login');

  } catch (err) {
    console.error('❌ Unexpected error:', err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

createTestUser();
