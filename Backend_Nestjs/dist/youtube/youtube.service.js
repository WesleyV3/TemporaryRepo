"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeService = void 0;
const common_1 = require("@nestjs/common");
const youtubeplaylist_model_1 = require("./youtubeplaylist.model");
const youtubethumbnail_model_1 = require("./youtubethumbnail.model");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let YoutubeService = class YoutubeService {
    constructor(httpService) {
        this.httpService = httpService;
        this.playlists = [];
    }
    async fetchYoutubePlaylists() {
        const youtubeChannel = process.env.YTCHANNEL;
        const key = process.env.YTAPI_KEY;
        if (this.playlists.length === 0) {
            const data = await (0, rxjs_1.lastValueFrom)(this.httpService.get("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=" + youtubeChannel + "&maxResults=25&key=" + key).pipe((0, rxjs_1.map)(response => response.data)));
            this.insertPlaylists(data["items"]);
            return { ...data };
        }
        else {
            return "Array already filled";
        }
    }
    insertPlaylists(youtubeJSON) {
        youtubeJSON.forEach(element => {
            const thumbnails = [];
            for (const key in element["snippet"]["thumbnails"]) {
                thumbnails.push(new youtubethumbnail_model_1.Thumbnail(key, element["snippet"]["thumbnails"][key]["url"], element["snippet"]["thumbnails"][key]["width"], element["snippet"]["thumbnails"][key]["height"]));
            }
            const temporaryYoutubePlaylist = new youtubeplaylist_model_1.YoutubePlaylist(element["id"], element["snippet"]["title"], element["snippet"]["description"], element["snippet"]["publishedAt"], thumbnails, element["contentDetails"]["itemCount"]);
            this.playlists.push({ ...temporaryYoutubePlaylist });
        });
    }
    getPlaylists() {
        const response = {
            PlaylistCount: this.playlists.length,
            Playlists: { ...this.playlists }
        };
        return response;
    }
    getSinglePlaylist(playlistId) {
        const playlist = this.playlists.find(list => list.id === playlistId);
        if (!playlist) {
            throw new common_1.NotFoundException('Coud not find playlist.' + playlistId);
        }
        return { ...playlist };
    }
};
exports.YoutubeService = YoutubeService;
exports.YoutubeService = YoutubeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], YoutubeService);
//# sourceMappingURL=youtube.service.js.map