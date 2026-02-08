import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { JournalService } from './journal.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('journal')
@UseGuards(AuthGuard)
export class JournalController {
  constructor(private journal: JournalService) {}

  // Notes
  @Post('notes')
  createNote(@Req() req: any, @Body() body: any) {
    return this.journal.createNote(req.user.id, body);
  }

  @Get('notes')
  listNotes(@Req() req: any, @Query('q') q?: string) {
    if (q && q.trim().length > 0) {
      return this.journal.searchNotes(req.user.id, q.trim());
    }
    return this.journal.listNotes(req.user.id);
  }

  // Highlights
  @Post('highlights')
  highlight(@Req() req: any, @Body() body: any) {
    return this.journal.highlight(req.user.id, body);
  }

  @Get('highlights')
  listHighlights(@Req() req: any) {
    return this.journal.listHighlights(req.user.id);
  }
}
