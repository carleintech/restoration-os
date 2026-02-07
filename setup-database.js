import 'dotenv/config';
import pg from 'pg';
import fs from 'fs';
const { Client } = pg;

const connectionString = process.env.DATABASE_URL;

console.log('🔍 Executing Supabase setup SQL...');

const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  },
  connectionTimeoutMillis: 10000,
});

async function setupDatabase() {
  try {
    await client.connect();
    console.log('✅ Connected to Supabase');
    
    // Read the SQL file
    const sql = fs.readFileSync('./setup-profiles.sql', 'utf8');
    
    console.log('⏳ Executing SQL statements...');
    await client.query(sql);
    
    console.log('✅ Profiles table created');
    console.log('✅ Triggers configured');
    console.log('✅ RLS policies enabled');
    console.log('✅ Database setup complete!');
    
    await client.end();
    process.exit(0);
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    console.error('Details:', error);
    process.exit(1);
  }
}

setupDatabase();
