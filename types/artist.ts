export interface ArtistImage {
    url: string;
    height: number;
    width: number;
}

export interface ArtistExternalUrls {
    spotify: string;
}

export interface ArtistFollowers {
    href: string | null;
    total: number;
}

export interface Artist {
    external_urls: ArtistExternalUrls;
    followers: ArtistFollowers;
    genres: string[];
    href: string;
    id: string;
    images: ArtistImage[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

export interface ArtistsResponse {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: Artist[];
}
