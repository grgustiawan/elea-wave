export interface ExternalUrls {
    spotify: string;
}

export interface AlbumImage {
    url: string;
    height: number;
    width: number;
}

export interface ArtistAlbum {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface Restrictions {
    reason: string;
}

export interface Album {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: AlbumImage[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: Restrictions;
    type: string;
    uri: string;
    artists: ArtistAlbum[];
    saved: boolean,
}

export interface AlbumsResponse {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: Album[];
}