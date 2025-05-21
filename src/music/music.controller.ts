import { Controller, Get, Param } from '@nestjs/common';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get('album/:id/tracks')
  getAlbum(@Param('id') id: string) {
    return this.musicService.getAlbum(id);
  }

  @Get('search/:query')
  searchAlbums(@Param('query') query: string) {
    return this.musicService.searchAlbums(query);
  }
}
