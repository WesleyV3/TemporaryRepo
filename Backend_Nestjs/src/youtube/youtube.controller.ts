import { Controller, Get, Header, Param } from '@nestjs/common';
import { YoutubeService } from './youtube.service';

@Controller('youtube')
export class YoutubeController {
    constructor(private readonly youtubeService: YoutubeService) { }

    @Get()
    fetchPlaylists() {
        const lists = this.youtubeService.fetchYoutubePlaylists()
            .then((data: any) => {
                return { data };
            })
            .catch((error) => {
                throw new Error(error)
            });
        return lists;
    }

    @Get('playlists')
    @Header('Access-Control-Allow-Origin', 'https://www.kayleagray.com')
    async getPlaylists() {
        if(this.youtubeService.playlists.length === 0)
        {
            await this.youtubeService.fetchYoutubePlaylists()
            .then((data: any) => {
                return { data };
            })
            .catch((error) => {
                throw new Error(error)
            });
        }
        return this.youtubeService.getPlaylists();
    }

    @Get('playlist/:id')
    getPlaylist(@Param('id') playlistId: string) {
        return this.youtubeService.getSinglePlaylist(playlistId);
    }

}