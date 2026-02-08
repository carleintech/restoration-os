import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SundayService {
  constructor(private prisma: PrismaService) {}

  /**
   * Members/visitors read the latest published message
   */
  async getLatestPublished() {
    return this.prisma.sundayMessage.findFirst({
      where: { status: 'published' },
      orderBy: { weekOf: 'desc' },
      include: {
        prepPrompts: { orderBy: { order: 'asc' } },
        book: true,
      },
    });
  }

  /**
   * Admin/pastor list all messages
   */
  async listAll() {
    return this.prisma.sundayMessage.findMany({
      orderBy: { weekOf: 'desc' },
      include: {
        prepPrompts: true,
        book: true,
      },
    });
  }

  /**
   * Create a draft Sunday message
   */
  async createDraft(userId: string, payload: any) {
    return this.prisma.sundayMessage.create({
      data: {
        ...payload,
        weekOf: payload.weekOf ? new Date(payload.weekOf) : undefined,
        status: 'draft',
        createdBy: userId,
      },
    });
  }

  /**
   * Add a prep prompt to a message
   */
  async addPrompt(messageId: string, prompt: any) {
    const exists = await this.prisma.sundayMessage.findUnique({
      where: { id: messageId },
    });
    if (!exists) throw new NotFoundException('Sunday message not found');

    return this.prisma.sundayPrepPrompt.create({
      data: { messageId, ...prompt },
    });
  }

  /**
   * Publish a message
   */
  async publish(messageId: string) {
    return this.prisma.sundayMessage.update({
      where: { id: messageId },
      data: {
        status: 'published',
        publishedAt: new Date(),
      },
    });
  }

  /**
   * User responds to prep prompt
   */
  async respond(userId: string, payload: any) {
    return this.prisma.sundayPrepResponse.create({
      data: { userId, ...payload },
    });
  }
}
