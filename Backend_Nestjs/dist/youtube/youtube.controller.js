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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeController = void 0;
const common_1 = require("@nestjs/common");
const youtube_service_1 = require("./youtube.service");
let YoutubeController = class YoutubeController {
    constructor(youtubeService) {
        this.youtubeService = youtubeService;
    }
    fetchPlaylists() {
        const lists = this.youtubeService.fetchYoutubePlaylists()
            .then((data) => {
            return { data };
        })
            .catch((error) => {
            throw new Error(error);
        });
        return lists;
    }
    async getPlaylists() {
        if (this.youtubeService.playlists.length === 0) {
            await this.youtubeService.fetchYoutubePlaylists()
                .then((data) => {
                return { data };
            })
                .catch((error) => {
                throw new Error(error);
            });
        }
        return this.youtubeService.getPlaylists();
    }
    getPlaylist(playlistId) {
        return this.youtubeService.getSinglePlaylist(playlistId);
    }
    async getDummy() {
        return { "PlaylistCount": 4, "Playlists": { "0": { "id": "PLGriFTH9SSY93CJoQ-vyerF95ojdST3Zr", "title": "Cooking Vids", "description": "", "publishedAt": "2021-05-01T21:39:00Z", "thumbnails": [{ "name": "default", "url": "https://i.ytimg.com/vi/-WKFCygix1E/default.jpg", "width": 120, "height": 90 }, { "name": "medium", "url": "https://i.ytimg.com/vi/-WKFCygix1E/mqdefault.jpg", "width": 320, "height": 180 }, { "name": "high", "url": "https://i.ytimg.com/vi/-WKFCygix1E/hqdefault.jpg", "width": 480, "height": 360 }, { "name": "standard", "url": "https://i.ytimg.com/vi/-WKFCygix1E/sddefault.jpg", "width": 640, "height": 480 }, { "name": "maxres", "url": "https://i.ytimg.com/vi/-WKFCygix1E/maxresdefault.jpg", "width": 1280, "height": 720 }], "videoCount": 1 }, "1": { "id": "PLGriFTH9SSY9WCzlbazluv4eh8Y1gmVmi", "title": "YA Book Reviews", "description": "", "publishedAt": "2021-04-29T00:22:17Z", "thumbnails": [{ "name": "default", "url": "https://i.ytimg.com/vi/1XoFIAZVjQ0/default.jpg", "width": 120, "height": 90 }, { "name": "medium", "url": "https://i.ytimg.com/vi/1XoFIAZVjQ0/mqdefault.jpg", "width": 320, "height": 180 }, { "name": "high", "url": "https://i.ytimg.com/vi/1XoFIAZVjQ0/hqdefault.jpg", "width": 480, "height": 360 }, { "name": "standard", "url": "https://i.ytimg.com/vi/1XoFIAZVjQ0/sddefault.jpg", "width": 640, "height": 480 }, { "name": "maxres", "url": "https://i.ytimg.com/vi/1XoFIAZVjQ0/maxresdefault.jpg", "width": 1280, "height": 720 }], "videoCount": 8 }, "2": { "id": "PLGriFTH9SSY9iizHvIn5oc57pwdKaKkBh", "title": "Craft Tutorials", "description": "", "publishedAt": "2021-04-29T00:19:38Z", "thumbnails": [{ "name": "default", "url": "https://i.ytimg.com/vi/IGVdCUFP5U0/default.jpg", "width": 120, "height": 90 }, { "name": "medium", "url": "https://i.ytimg.com/vi/IGVdCUFP5U0/mqdefault.jpg", "width": 320, "height": 180 }, { "name": "high", "url": "https://i.ytimg.com/vi/IGVdCUFP5U0/hqdefault.jpg", "width": 480, "height": 360 }, { "name": "standard", "url": "https://i.ytimg.com/vi/IGVdCUFP5U0/sddefault.jpg", "width": 640, "height": 480 }, { "name": "maxres", "url": "https://i.ytimg.com/vi/IGVdCUFP5U0/maxresdefault.jpg", "width": 1280, "height": 720 }], "videoCount": 6 }, "3": { "id": "PLGriFTH9SSY8deiRPUY8cpKw4Bg_UlzUq", "title": "Adult Book Reviews", "description": "", "publishedAt": "2021-04-26T23:02:44Z", "thumbnails": [{ "name": "default", "url": "https://i.ytimg.com/vi/Ea4BvJex5Qs/default.jpg", "width": 120, "height": 90 }, { "name": "medium", "url": "https://i.ytimg.com/vi/Ea4BvJex5Qs/mqdefault.jpg", "width": 320, "height": 180 }, { "name": "high", "url": "https://i.ytimg.com/vi/Ea4BvJex5Qs/hqdefault.jpg", "width": 480, "height": 360 }, { "name": "standard", "url": "https://i.ytimg.com/vi/Ea4BvJex5Qs/sddefault.jpg", "width": 640, "height": 480 }, { "name": "maxres", "url": "https://i.ytimg.com/vi/Ea4BvJex5Qs/maxresdefault.jpg", "width": 1280, "height": 720 }], "videoCount": 3 } } };
    }
};
exports.YoutubeController = YoutubeController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], YoutubeController.prototype, "fetchPlaylists", null);
__decorate([
    (0, common_1.Get)('playlists'),
    (0, common_1.Header)('Access-Control-Allow-Origin', 'https://www.kayleagray.com'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], YoutubeController.prototype, "getPlaylists", null);
__decorate([
    (0, common_1.Get)('playlist/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], YoutubeController.prototype, "getPlaylist", null);
__decorate([
    (0, common_1.Get)('dummy'),
    (0, common_1.Header)('Access-Control-Allow-Origin', '*'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], YoutubeController.prototype, "getDummy", null);
exports.YoutubeController = YoutubeController = __decorate([
    (0, common_1.Controller)('youtube'),
    __metadata("design:paramtypes", [youtube_service_1.YoutubeService])
], YoutubeController);
//# sourceMappingURL=youtube.controller.js.map