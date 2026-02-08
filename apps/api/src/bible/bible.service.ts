import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BibleService {
  constructor(private prisma: PrismaService) {}

  /**
   * Get all Bible books ordered by ID
   */
  async getBooks() {
    return this.prisma.bibleBook.findMany({
      orderBy: { id: 'asc' },
    });
  }

  /**
   * Get all verses for a specific book and chapter
   */
  async getChapter(bookId: number, chapter: number) {
    const book = await this.prisma.bibleBook.findUnique({
      where: { id: bookId },
    });

    if (!book) {
      return null;
    }

    const verses = await this.prisma.bibleVerse.findMany({
      where: {
        bookId,
        chapter,
      },
      orderBy: { verse: 'asc' },
    });

    return {
      book,
      chapter,
      verses,
    };
  }

  /**
   * Get the most recent weekly scripture
   */
  async getWeeklyScripture() {
    return this.prisma.weeklyScripture.findFirst({
      orderBy: { weekOf: 'desc' },
      include: {
        book: true,
        publisher: true,
      },
    });
  }

  /**
   * Publish a new weekly scripture (pastor+ only)
   */
  async publishWeeklyScripture(data: {
    weekOf: Date;
    title: string;
    message: string;
    bookId: number;
    chapter: number;
    verseFrom: number;
    verseTo: number;
    publishedBy: string;
  }) {
    return this.prisma.weeklyScripture.create({
      data: {
        ...data,
        publishedAt: new Date(),
      },
      include: {
        book: true,
        publisher: true,
      },
    });
  }
}
