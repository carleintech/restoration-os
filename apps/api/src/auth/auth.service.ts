import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { jwtVerify, createRemoteJWKSet } from 'jose';

@Injectable()
export class AuthService {
  private supabase: SupabaseClient;
  private jwks: ReturnType<typeof createRemoteJWKSet>;

  constructor() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables');
    }

    this.supabase = createClient(supabaseUrl, supabaseKey);
    
    // Setup JWKS for JWT verification
    this.jwks = createRemoteJWKSet(
      new URL(`${supabaseUrl}/auth/v1/jwks`)
    );
  }

  async verifyToken(token: string) {
    try {
      const { payload } = await jwtVerify(token, this.jwks, {
        issuer: process.env.SUPABASE_URL + '/auth/v1',
        audience: 'authenticated',
      });

      return payload;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  async getProfile(userId: string) {
    const { data, error } = await this.supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }

  getSupabaseClient() {
    return this.supabase;
  }
}
