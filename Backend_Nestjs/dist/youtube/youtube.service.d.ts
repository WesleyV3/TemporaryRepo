import { YoutubePlaylist } from "./youtubeplaylist.model";
import { Thumbnail } from "./youtubethumbnail.model";
import { HttpService } from "@nestjs/axios";
export declare class YoutubeService {
    private readonly httpService;
    constructor(httpService: HttpService);
    playlists: YoutubePlaylist[];
    fetchYoutubePlaylists(): Promise<any>;
    insertPlaylists(youtubeJSON: any): void;
    getPlaylists(): {
        PlaylistCount: number;
        Playlists: {
            [x: number]: YoutubePlaylist;
            length: number;
            toString(): string;
            toLocaleString(): string;
            pop(): YoutubePlaylist;
            push(...items: YoutubePlaylist[]): number;
            concat(...items: ConcatArray<YoutubePlaylist>[]): YoutubePlaylist[];
            concat(...items: (YoutubePlaylist | ConcatArray<YoutubePlaylist>)[]): YoutubePlaylist[];
            join(separator?: string): string;
            reverse(): YoutubePlaylist[];
            shift(): YoutubePlaylist;
            slice(start?: number, end?: number): YoutubePlaylist[];
            sort(compareFn?: (a: YoutubePlaylist, b: YoutubePlaylist) => number): YoutubePlaylist[];
            splice(start: number, deleteCount?: number): YoutubePlaylist[];
            splice(start: number, deleteCount: number, ...items: YoutubePlaylist[]): YoutubePlaylist[];
            unshift(...items: YoutubePlaylist[]): number;
            indexOf(searchElement: YoutubePlaylist, fromIndex?: number): number;
            lastIndexOf(searchElement: YoutubePlaylist, fromIndex?: number): number;
            every<S extends YoutubePlaylist>(predicate: (value: YoutubePlaylist, index: number, array: YoutubePlaylist[]) => value is S, thisArg?: any): this is S[];
            every(predicate: (value: YoutubePlaylist, index: number, array: YoutubePlaylist[]) => unknown, thisArg?: any): boolean;
            some(predicate: (value: YoutubePlaylist, index: number, array: YoutubePlaylist[]) => unknown, thisArg?: any): boolean;
            forEach(callbackfn: (value: YoutubePlaylist, index: number, array: YoutubePlaylist[]) => void, thisArg?: any): void;
            map<U>(callbackfn: (value: YoutubePlaylist, index: number, array: YoutubePlaylist[]) => U, thisArg?: any): U[];
            filter<S_1 extends YoutubePlaylist>(predicate: (value: YoutubePlaylist, index: number, array: YoutubePlaylist[]) => value is S_1, thisArg?: any): S_1[];
            filter(predicate: (value: YoutubePlaylist, index: number, array: YoutubePlaylist[]) => unknown, thisArg?: any): YoutubePlaylist[];
            reduce(callbackfn: (previousValue: YoutubePlaylist, currentValue: YoutubePlaylist, currentIndex: number, array: YoutubePlaylist[]) => YoutubePlaylist): YoutubePlaylist;
            reduce(callbackfn: (previousValue: YoutubePlaylist, currentValue: YoutubePlaylist, currentIndex: number, array: YoutubePlaylist[]) => YoutubePlaylist, initialValue: YoutubePlaylist): YoutubePlaylist;
            reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: YoutubePlaylist, currentIndex: number, array: YoutubePlaylist[]) => U_1, initialValue: U_1): U_1;
            reduceRight(callbackfn: (previousValue: YoutubePlaylist, currentValue: YoutubePlaylist, currentIndex: number, array: YoutubePlaylist[]) => YoutubePlaylist): YoutubePlaylist;
            reduceRight(callbackfn: (previousValue: YoutubePlaylist, currentValue: YoutubePlaylist, currentIndex: number, array: YoutubePlaylist[]) => YoutubePlaylist, initialValue: YoutubePlaylist): YoutubePlaylist;
            reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: YoutubePlaylist, currentIndex: number, array: YoutubePlaylist[]) => U_2, initialValue: U_2): U_2;
            find<S_2 extends YoutubePlaylist>(predicate: (value: YoutubePlaylist, index: number, obj: YoutubePlaylist[]) => value is S_2, thisArg?: any): S_2;
            find(predicate: (value: YoutubePlaylist, index: number, obj: YoutubePlaylist[]) => unknown, thisArg?: any): YoutubePlaylist;
            findIndex(predicate: (value: YoutubePlaylist, index: number, obj: YoutubePlaylist[]) => unknown, thisArg?: any): number;
            fill(value: YoutubePlaylist, start?: number, end?: number): YoutubePlaylist[];
            copyWithin(target: number, start: number, end?: number): YoutubePlaylist[];
            entries(): IterableIterator<[number, YoutubePlaylist]>;
            keys(): IterableIterator<number>;
            values(): IterableIterator<YoutubePlaylist>;
            includes(searchElement: YoutubePlaylist, fromIndex?: number): boolean;
            flatMap<U_3, This = undefined>(callback: (this: This, value: YoutubePlaylist, index: number, array: YoutubePlaylist[]) => U_3 | readonly U_3[], thisArg?: This): U_3[];
            flat<A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[];
            [Symbol.iterator](): IterableIterator<YoutubePlaylist>;
            [Symbol.unscopables]: {
                [x: number]: boolean;
                length?: boolean;
                toString?: boolean;
                toLocaleString?: boolean;
                pop?: boolean;
                push?: boolean;
                concat?: boolean;
                join?: boolean;
                reverse?: boolean;
                shift?: boolean;
                slice?: boolean;
                sort?: boolean;
                splice?: boolean;
                unshift?: boolean;
                indexOf?: boolean;
                lastIndexOf?: boolean;
                every?: boolean;
                some?: boolean;
                forEach?: boolean;
                map?: boolean;
                filter?: boolean;
                reduce?: boolean;
                reduceRight?: boolean;
                find?: boolean;
                findIndex?: boolean;
                fill?: boolean;
                copyWithin?: boolean;
                entries?: boolean;
                keys?: boolean;
                values?: boolean;
                includes?: boolean;
                flatMap?: boolean;
                flat?: boolean;
                [Symbol.iterator]?: boolean;
                readonly [Symbol.unscopables]?: boolean;
                at?: boolean;
            };
            at(index: number): YoutubePlaylist;
        };
    };
    getSinglePlaylist(playlistId: string): {
        id: string;
        title: string;
        description: string;
        publishedAt: string;
        thumbnails: Thumbnail[];
        videoCount: number;
    };
}
