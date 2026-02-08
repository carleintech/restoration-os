import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { verifySupabaseJwt } from '../lib/supabase-jwt';
import { PrismaService } from '../prisma/prisma.service';
import { IS_PUBLIC_KEY } from './decorators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Check if route is marked as public
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const req = context.switchToHttp().getRequest();
    const authHeader: string | undefined = req.headers['authorization'];
    
    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing Bearer token');
    }

    const token = authHeader.slice('Bearer '.length).trim();
    const jwksUrl = this.configService.get<string>('SUPABASE_JWKS_URL');
    
    if (!jwksUrl) {
      throw new UnauthorizedException('Missing JWKS URL');
    }

    try {
      const { payload } = await verifySupabaseJwt(token, jwksUrl);

      const profile = await this.prisma.profiles.findUnique({
        where: { id: payload.sub },
      });

      if (!profile || !profile.is_active) {
        throw new ForbiddenException('User not active');
      }

      req.user = {
        id: profile.id,
        email: profile.email,
        role: profile.role,
      };

      return true;
    } catch (error) {
      if (error instanceof ForbiddenException) {
        throw error;
      }
      throw new UnauthorizedException('Invalid token');
    }
  }
}

