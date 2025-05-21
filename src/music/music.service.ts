import { Injectable } from '@nestjs/common';

@Injectable()
export class MusicService {
  async getAlbum(id: string) {
    const response = await fetch(`https://api.deezer.com/album/${id}/tracks`);
    const data = await response.json();
    return data;
  }

  async searchAlbums(query: string) {
    const response = await fetch(
      `https://api.deezer.com/search/album?q=${query}`,
    );
    const data = await response.json();
    return data.data;
  }
}
