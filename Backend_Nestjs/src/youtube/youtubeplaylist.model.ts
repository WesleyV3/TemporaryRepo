import { Thumbnail } from "./youtubethumbnail.model";

export class YoutubePlaylist {

    constructor(
        public id: string, 
        public title: string, 
        public description: string, 
        public publishedAt: string, 
        public thumbnails: Thumbnail[], 
        public videoCount: number){}
}
