import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class JournalService {
  constructor(private prisma: PrismaService) {}

  // NOTES
  createNote(userId: string, payload: any) {
    return this.prisma.bibleNote.create({
      data: {
        userId,
        bookId: payload.bookId,
        chapter: payload.chapter,
        verseFrom: payload.verseFrom,
        verseTo: payload.verseTo,
        title: payload.title,
        content: payload.content,
        tags: payload.tags ?? [],
      },
    });
  }

  listNotes(userId: string) {
    return this.prisma.bibleNote.findMany({
      where: { userId },
      orderBy: { updatedAt: 'desc' },
    });
  }

  // Simple search (title/content contains)
  searchNotes(userId: string, q: string) {
    return this.prisma.bibleNote.findMany({
      where: {
        userId,
        OR: [
          { title: { contains: q, mode: 'insensitive' } },
          { content: { contains: q, mode: 'insensitive' } },
        ],
      },
      orderBy: { updatedAt: 'desc' },
    });
  }

  // HIGHLIGHTS
  highlight(userId: string, payload: any) {
    return this.prisma.bibleHighlight.upsert({
      where: {
        userId_bookId_chapter_verseFrom_verseTo: {
          userId,
          bookId: payload.bookId,
          chapter: payload.chapter,
          verseFrom: payload.verseFrom ?? null,
          verseTo: payload.verseTo ?? null,
        },
      },
      update: {
        label: payload.label ?? null,
      },
      create: {
        userId,
        bookId: payload.bookId,
        chapter: payload.chapter,
        verseFrom: payload.verseFrom ?? null,
        verseTo: payload.verseTo ?? null,
        label: payload.label ?? null,
      },
    });
  }

  listHighlights(userId: string) {
    return this.prisma.bibleHighlight.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
