import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TripsService {
  constructor(private prisma: PrismaService) {}

  list() {
    return this.prisma.trip.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  getById(id: string) {
    return this.prisma.trip.findUnique({
      where: { id },
      include: {
        interests: true,
        signups: true,
        questions: true,
      },
    });
  }

  create(userId: string, payload: any) {
    return this.prisma.trip.create({
      data: {
        ...payload,
        createdBy: userId,
      },
    });
  }

  async setStatus(tripId: string, status: string) {
    return this.prisma.trip.update({
      where: { id: tripId },
      data: { status },
    });
  }

  interest(userId: string, tripId: string, level: string) {
    return this.prisma.tripInterest.upsert({
      where: { tripId_userId: { tripId, userId } },
      update: { level },
      create: { tripId, userId, level },
    });
  }

  async signup(userId: string, tripId: string) {
    const trip = await this.prisma.trip.findUnique({ where: { id: tripId } });
    if (!trip) throw new BadRequestException('Trip not found');
    if (trip.status !== 'open') throw new BadRequestException('Trip is not open');

    if (trip.capacity) {
      const count = await this.prisma.tripSignup.count({
        where: { tripId, status: 'confirmed' },
      });
      if (count >= trip.capacity) throw new BadRequestException('Trip is full');
    }

    return this.prisma.tripSignup.upsert({
      where: { tripId_userId: { tripId, userId } },
      update: { status: 'pending' },
      create: { tripId, userId, status: 'pending' },
    });
  }

  ask(userId: string, tripId: string, question: string) {
    return this.prisma.tripQuestion.create({
      data: { tripId, userId, question },
    });
  }

  answer(adminId: string, qid: string, answer: string) {
    return this.prisma.tripQuestion.update({
      where: { id: qid },
      data: {
        answer,
        answeredBy: adminId,
        answeredAt: new Date(),
      },
    });
  }
}
