import { Thumbnail } from "./youtubethumbnail.model";
export declare class YoutubePlaylist {
    id: string;
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: Thumbnail[];
    videoCount: number;
    constructor(id: string, title: string, description: string, publishedAt: string, thumbnails: Thumbnail[], videoCount: number);
}
