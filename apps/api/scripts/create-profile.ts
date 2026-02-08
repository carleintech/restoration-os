#!/usr/bin/env tsx
/**
 * Script to create a profile for an existing Supabase Auth user
 * Usage: pnpm tsx scripts/create-profile.ts <email> [full_name] [role]
 */

import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createProfile() {
  const email = process.argv[2];
  const fullName = process.argv[3] || 'Test User';
  const role = process.argv[4] || 'member';

  if (!email) {
    console.error('Usage: pnpm tsx scripts/create-profile.ts <email> [full_name] [role]');
    console.error('Example: pnpm tsx scripts/create-profile.ts test@restoration.church "Test User" member');
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

  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  try {
    console.log('\n🔍 Looking up user in Supabase Auth...');

    // Get user from Supabase Auth
    const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();

    if (listError) {
      console.error('❌ Error listing users:', listError.message);
      process.exit(1);
    }

    const user = users.find(u => u.email === email);

    if (!user) {
      console.error(`❌ No user found with email: ${email}`);
      console.error('\nCreate the user first in Supabase Dashboard or use create-test-user.ts');
      process.exit(1);
    }

    console.log('✅ Found user in Auth:');
    console.log('   User ID:', user.id);
    console.log('   Email:', user.email);

    console.log('\n🔨 Creating profile in database...');

    // Check if profile already exists
    const existingProfile = await prisma.profiles.findUnique({
      where: { id: user.id },
    });

    if (existingProfile) {
      console.log('⚠️  Profile already exists for this user!');
      console.log('   Current role:', existingProfile.role);
      console.log('   Current name:', existingProfile.full_name);
      process.exit(0);
    }

    // Create profile in database
    const profile = await prisma.profiles.create({
      data: {
        id: user.id,
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

    console.log('\n✨ Profile creation complete!\n');
    console.log('🔗 You can now login at: http://localhost:3001/login');
    console.log('   Email:', email);

  } catch (err) {
    console.error('❌ Unexpected error:', err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

createProfile();
