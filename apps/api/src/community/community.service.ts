import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommunityService {
  constructor(private prisma: PrismaService) {}

  list() {
    return this.prisma.communityPost.findMany({
      where: { isHidden: false },
      orderBy: { createdAt: 'desc' },
    });
  }

  create(userId: string, payload: any) {
    return this.prisma.communityPost.create({
      data: {
        ...payload,
        userId,
      },
    });
  }

  react(userId: string, postId: string, emoji: string) {
    return this.prisma.communityReaction.upsert({
      where: {
        postId_userId_emoji: { postId, userId, emoji },
      },
      update: {},
      create: { postId, userId, emoji },
    });
  }

  pray(userId: string, postId: string) {
    return this.prisma.communityPrayer.upsert({
      where: {
        postId_userId: { postId, userId },
      },
      update: {},
      create: { postId, userId },
    });
  }

  async hide(postId: string) {
    return this.prisma.communityPost.update({
      where: { id: postId },
      data: { isHidden: true },
    });
  }

  async pin(postId: string) {
    return this.prisma.communityPost.update({
      where: { id: postId },
      data: { isPinned: true },
    });
  }
}
