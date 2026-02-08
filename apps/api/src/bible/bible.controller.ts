import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { BibleService } from './bible.service';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { User } from '../auth/user.decorator';

@Controller('bible')
export class BibleController {
  constructor(private readonly bibleService: BibleService) {}

  /**
   * GET /bible/books
   * Public endpoint to get all Bible books
   */
  @Get('books')
  async getBooks() {
    return this.bibleService.getBooks();
  }

  /**
   * GET /bible/weekly
   * Public endpoint to get the most recent weekly scripture
   */
  @Get('weekly')
  async getWeeklyScripture() {
    const scripture = await this.bibleService.getWeeklyScripture();
    if (!scripture) {
      throw new NotFoundException('No weekly scripture published yet');
    }
    return scripture;
  }

  /**
   * GET /bible/:bookId/:chapter
   * Public endpoint to get all verses for a specific book and chapter
   */
  @Get(':bookId/:chapter')
  async getChapter(
    @Param('bookId', ParseIntPipe) bookId: number,
    @Param('chapter', ParseIntPipe) chapter: number,
  ) {
    const result = await this.bibleService.getChapter(bookId, chapter);
    if (!result) {
      throw new NotFoundException(`Book with ID ${bookId} not found`);
    }
    return result;
  }

  /**
   * POST /bible/weekly
   * Pastor+ only endpoint to publish a new weekly scripture
   */
  @Post('weekly')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('pastor', 'admin', 'super_admin')
  async publishWeeklyScripture(
    @User() user: any,
    @Body()
    body: {
      weekOf: string; // ISO date string
      title: string;
      message: string;
      bookId: number;
      chapter: number;
      verseFrom: number;
      verseTo: number;
    },
  ) {
    return this.bibleService.publishWeeklyScripture({
      weekOf: new Date(body.weekOf),
      title: body.title,
      message: body.message,
      bookId: body.bookId,
      chapter: body.chapter,
      verseFrom: body.verseFrom,
      verseTo: body.verseTo,
      publishedBy: user.id,
    });
  }
}
