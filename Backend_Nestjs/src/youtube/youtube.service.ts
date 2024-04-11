import { Injectable, NotFoundException } from "@nestjs/common";
import { YoutubePlaylist } from "./youtubeplaylist.model";
import { Thumbnail } from "./youtubethumbnail.model";
import { HttpService } from "@nestjs/axios";

import { lastValueFrom, map } from 'rxjs'

@Injectable()
export class YoutubeService {
    constructor(private readonly httpService: HttpService) { }
    playlists: YoutubePlaylist[] = [];


    async fetchYoutubePlaylists() {
        const youtubeChannel = process.env.YTCHANNEL;
        const key = process.env.YTAPI_KEY;
        if(this.playlists.length === 0)
        {
            const data = await lastValueFrom(
                this.httpService.get("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=" + youtubeChannel + "&maxResults=25&key=" + key).pipe(
                    map(response => response.data)
                )
            );
            this.insertPlaylists(data["items"]);
            return { ...data };
        }
        else
        {
            return "Array already filled";
        }
    }

    insertPlaylists(youtubeJSON) {
        youtubeJSON.forEach(element => {
            const thumbnails: Thumbnail[] = [];

            for (const key in element["snippet"]["thumbnails"]) {
                thumbnails.push(new Thumbnail(
                    key,
                    element["snippet"]["thumbnails"][key]["url"],
                    element["snippet"]["thumbnails"][key]["width"],
                    element["snippet"]["thumbnails"][key]["height"]
                ));
            }

            const temporaryYoutubePlaylist = new YoutubePlaylist(
                element["id"],
                element["snippet"]["title"],
                element["snippet"]["description"],
                element["snippet"]["publishedAt"],
                thumbnails,
                element["contentDetails"]["itemCount"]
            );
            this.playlists.push({ ...temporaryYoutubePlaylist });
        });
    }

    getPlaylists() {
        const response = {
            PlaylistCount: this.playlists.length,
            Playlists: { ...this.playlists }
        }

        return response;
    }

    getSinglePlaylist(playlistId: string) {
        const playlist = this.playlists.find(list => list.id === playlistId);

        if (!playlist) {
            throw new NotFoundException('Coud not find playlist.' + playlistId);
        }
        return { ...playlist };
    }
}