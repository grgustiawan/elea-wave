export interface SpotifyTrack {
  id: string;
  name: string;
  uri: string;
  duration_ms: number;
  album: {
    images: Array<{
      url: string;
      height: number;
      width: number;
    }>;
    name: string;
  };
  artists: Array<{
    name: string;
    id: string;
  }>;
}

export interface SpotifyPlaybackState {
  is_playing: boolean;
  progress_ms: number;
  item: SpotifyTrack;
}

export interface SpotifyLyrics {
  lyrics: {
    lines: Array<{
      words: string;
      startTimeMs: string;
    }>;
  };
}
