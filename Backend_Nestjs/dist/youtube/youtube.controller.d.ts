import { YoutubeService } from './youtube.service';
export declare class YoutubeController {
    private readonly youtubeService;
    constructor(youtubeService: YoutubeService);
    fetchPlaylists(): Promise<{
        data: any;
    }>;
    getPlaylists(): Promise<{
        PlaylistCount: number;
        Playlists: {
            [x: number]: import("./youtubeplaylist.model").YoutubePlaylist;
            length: number;
            toString(): string;
            toLocaleString(): string;
            pop(): import("./youtubeplaylist.model").YoutubePlaylist;
            push(...items: import("./youtubeplaylist.model").YoutubePlaylist[]): number;
            concat(...items: ConcatArray<import("./youtubeplaylist.model").YoutubePlaylist>[]): import("./youtubeplaylist.model").YoutubePlaylist[];
            concat(...items: (import("./youtubeplaylist.model").YoutubePlaylist | ConcatArray<import("./youtubeplaylist.model").YoutubePlaylist>)[]): import("./youtubeplaylist.model").YoutubePlaylist[];
            join(separator?: string): string;
            reverse(): import("./youtubeplaylist.model").YoutubePlaylist[];
            shift(): import("./youtubeplaylist.model").YoutubePlaylist;
            slice(start?: number, end?: number): import("./youtubeplaylist.model").YoutubePlaylist[];
            sort(compareFn?: (a: import("./youtubeplaylist.model").YoutubePlaylist, b: import("./youtubeplaylist.model").YoutubePlaylist) => number): import("./youtubeplaylist.model").YoutubePlaylist[];
            splice(start: number, deleteCount?: number): import("./youtubeplaylist.model").YoutubePlaylist[];
            splice(start: number, deleteCount: number, ...items: import("./youtubeplaylist.model").YoutubePlaylist[]): import("./youtubeplaylist.model").YoutubePlaylist[];
            unshift(...items: import("./youtubeplaylist.model").YoutubePlaylist[]): number;
            indexOf(searchElement: import("./youtubeplaylist.model").YoutubePlaylist, fromIndex?: number): number;
            lastIndexOf(searchElement: import("./youtubeplaylist.model").YoutubePlaylist, fromIndex?: number): number;
            every<S extends import("./youtubeplaylist.model").YoutubePlaylist>(predicate: (value: import("./youtubeplaylist.model").YoutubePlaylist, index: number, array: import("./youtubeplaylist.model").YoutubePlaylist[]) => value is S, thisArg?: any): this is S[];
            every(predicate: (value: import("./youtubeplaylist.model").YoutubePlaylist, index: number, array: import("./youtubeplaylist.model").YoutubePlaylist[]) => unknown, thisArg?: any): boolean;
            some(predicate: (value: import("./youtubeplaylist.model").YoutubePlaylist, index: number, array: import("./youtubeplaylist.model").YoutubePlaylist[]) => unknown, thisArg?: any): boolean;
            forEach(callbackfn: (value: import("./youtubeplaylist.model").YoutubePlaylist, index: number, array: import("./youtubeplaylist.model").YoutubePlaylist[]) => void, thisArg?: any): void;
            map<U>(callbackfn: (value: import("./youtubeplaylist.model").YoutubePlaylist, index: number, array: import("./youtubeplaylist.model").YoutubePlaylist[]) => U, thisArg?: any): U[];
            filter<S_1 extends import("./youtubeplaylist.model").YoutubePlaylist>(predicate: (value: import("./youtubeplaylist.model").YoutubePlaylist, index: number, array: import("./youtubeplaylist.model").YoutubePlaylist[]) => value is S_1, thisArg?: any): S_1[];
            filter(predicate: (value: import("./youtubeplaylist.model").YoutubePlaylist, index: number, array: import("./youtubeplaylist.model").YoutubePlaylist[]) => unknown, thisArg?: any): import("./youtubeplaylist.model").YoutubePlaylist[];
            reduce(callbackfn: (previousValue: import("./youtubeplaylist.model").YoutubePlaylist, currentValue: import("./youtubeplaylist.model").YoutubePlaylist, currentIndex: number, array: import("./youtubeplaylist.model").YoutubePlaylist[]) => import("./youtubeplaylist.model").YoutubePlaylist): import("./youtubeplaylist.model").YoutubePlaylist;
            reduce(callbackfn: (previousValue: import("./youtubeplaylist.model").YoutubePlaylist, currentValue: import("./youtubeplaylist.model").YoutubePlaylist, currentIndex: number, array: import("./youtubeplaylist.model").YoutubePlaylist[]) => import("./youtubeplaylist.model").YoutubePlaylist, initialValue: import("./youtubeplaylist.model").YoutubePlaylist): import("./youtubeplaylist.model").YoutubePlaylist;
            reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: import("./youtubeplaylist.model").YoutubePlaylist, currentIndex: number, array: import("./youtubeplaylist.model").YoutubePlaylist[]) => U_1, initialValue: U_1): U_1;
            reduceRight(callbackfn: (previousValue: import("./youtubeplaylist.model").YoutubePlaylist, currentValue: import("./youtubeplaylist.model").YoutubePlaylist, currentIndex: number, array: import("./youtubeplaylist.model").YoutubePlaylist[]) => import("./youtubeplaylist.model").YoutubePlaylist): import("./youtubeplaylist.model").YoutubePlaylist;
            reduceRight(callbackfn: (previousValue: import("./youtubeplaylist.model").YoutubePlaylist, currentValue: import("./youtubeplaylist.model").YoutubePlaylist, currentIndex: number, array: import("./youtubeplaylist.model").YoutubePlaylist[]) => import("./youtubeplaylist.model").YoutubePlaylist, initialValue: import("./youtubeplaylist.model").YoutubePlaylist): import("./youtubeplaylist.model").YoutubePlaylist;
            reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: import("./youtubeplaylist.model").YoutubePlaylist, currentIndex: number, array: import("./youtubeplaylist.model").YoutubePlaylist[]) => U_2, initialValue: U_2): U_2;
            find<S_2 extends import("./youtubeplaylist.model").YoutubePlaylist>(predicate: (value: import("./youtubeplaylist.model").YoutubePlaylist, index: number, obj: import("./youtubeplaylist.model").YoutubePlaylist[]) => value is S_2, thisArg?: any): S_2;
            find(predicate: (value: import("./youtubeplaylist.model").YoutubePlaylist, index: number, obj: import("./youtubeplaylist.model").YoutubePlaylist[]) => unknown, thisArg?: any): import("./youtubeplaylist.model").YoutubePlaylist;
            findIndex(predicate: (value: import("./youtubeplaylist.model").YoutubePlaylist, index: number, obj: import("./youtubeplaylist.model").YoutubePlaylist[]) => unknown, thisArg?: any): number;
            fill(value: import("./youtubeplaylist.model").YoutubePlaylist, start?: number, end?: number): import("./youtubeplaylist.model").YoutubePlaylist[];
            copyWithin(target: number, start: number, end?: number): import("./youtubeplaylist.model").YoutubePlaylist[];
            entries(): IterableIterator<[number, import("./youtubeplaylist.model").YoutubePlaylist]>;
            keys(): IterableIterator<number>;
            values(): IterableIterator<import("./youtubeplaylist.model").YoutubePlaylist>;
            includes(searchElement: import("./youtubeplaylist.model").YoutubePlaylist, fromIndex?: number): boolean;
            flatMap<U_3, This = undefined>(callback: (this: This, value: import("./youtubeplaylist.model").YoutubePlaylist, index: number, array: import("./youtubeplaylist.model").YoutubePlaylist[]) => U_3 | readonly U_3[], thisArg?: This): U_3[];
            flat<A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[];
            [Symbol.iterator](): IterableIterator<import("./youtubeplaylist.model").YoutubePlaylist>;
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
            at(index: number): import("./youtubeplaylist.model").YoutubePlaylist;
        };
    }>;
    getPlaylist(playlistId: string): {
        id: string;
        title: string;
        description: string;
        publishedAt: string;
        thumbnails: import("./youtubethumbnail.model").Thumbnail[];
        videoCount: number;
    };
    getDummy(): Promise<{
        PlaylistCount: number;
        Playlists: {
            "0": {
                id: string;
                title: string;
                description: string;
                publishedAt: string;
                thumbnails: {
                    name: string;
                    url: string;
                    width: number;
                    height: number;
                }[];
                videoCount: number;
            };
            "1": {
                id: string;
                title: string;
                description: string;
                publishedAt: string;
                thumbnails: {
                    name: string;
                    url: string;
                    width: number;
                    height: number;
                }[];
                videoCount: number;
            };
            "2": {
                id: string;
                title: string;
                description: string;
                publishedAt: string;
                thumbnails: {
                    name: string;
                    url: string;
                    width: number;
                    height: number;
                }[];
                videoCount: number;
            };
            "3": {
                id: string;
                title: string;
                description: string;
                publishedAt: string;
                thumbnails: {
                    name: string;
                    url: string;
                    width: number;
                    height: number;
                }[];
                videoCount: number;
            };
        };
    }>;
}
