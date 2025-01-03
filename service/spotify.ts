import axios from 'axios';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { SpotifyPlaybackState, SpotifyLyrics } from '../types/spotify';

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

class SpotifyService {
  private static accessToken: string = '';
  private static refreshToken: string = '';
  private static expirationTime: number = 0;

  private static clientId = 'YOUR_SPOTIFY_CLIENT_ID'; // Replace with your Spotify Client ID
  private static redirectUri = AuthSession.makeRedirectUri({ scheme: 'your-scheme' });

  private static setAccessToken(token: string) {
    this.accessToken = token;
    spotifyApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  static async authenticate() {
    try {
      const request: any = await AuthSession.useAuthRequest(
        {
          responseType: AuthSession.ResponseType.Token,
          clientId: this.clientId,
          scopes: ['user-read-currently-playing', 'user-modify-playback-state', 'streaming', 'user-read-playback-state'],
          usePKCE: false,
          redirectUri: this.redirectUri,
        },
        discovery
      );

      if (request.type === 'success') {
        const { access_token, expires_in } = request.params;
        this.setAccessToken(access_token);
        this.expirationTime = Date.now() + expires_in * 1000;
        return access_token;
      } else {
        throw new Error('Authentication failed');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      throw error;
    }
  }

  private static async refreshAccessToken() {
    if (Date.now() >= this.expirationTime) {
      try {
        await this.authenticate();
      } catch (error) {
        console.error('Error refreshing token:', error);
        throw error;
      }
    }
  }

  static async getCurrentPlayback(): Promise<SpotifyPlaybackState> {
    await this.refreshAccessToken();
    try {
      const response = await spotifyApi.get('/me/player');
      return response.data;
    } catch (error) {
      console.error('Error getting current playback:', error);
      throw error;
    }
  }

  static async controlPlayback(action: 'play' | 'pause') {
    await this.refreshAccessToken();
    try {
      await spotifyApi.put(`/me/player/${action}`);
    } catch (error) {
      console.error(`Error ${action}ing playback:`, error);
      throw error;
    }
  }

  static async skipTrack(direction: 'next' | 'previous') {
    await this.refreshAccessToken();
    try {
      await spotifyApi.post(`/me/player/${direction}`);
    } catch (error) {
      console.error(`Error skipping ${direction}:`, error);
      throw error;
    }
  }

  static async seekPosition(position_ms: number) {
    await this.refreshAccessToken();
    try {
      await spotifyApi.put('/me/player/seek', null, {
        params: { position_ms },
      });
    } catch (error) {
      console.error('Error seeking position:', error);
      throw error;
    }
  }

  static async getLyrics(trackId: string): Promise<SpotifyLyrics> {
    await this.refreshAccessToken();
    try {
      // Note: Spotify doesn't actually have a lyrics API. This is a placeholder.
      // You would need to use a third-party lyrics API in a real application.
      const response = await spotifyApi.get(`/tracks/${trackId}`);
      return {
        lyrics: {
          lines: [
            { words: "This is a placeholder for lyrics.", startTimeMs: "0" },
            { words: "Spotify doesn't provide lyrics directly.", startTimeMs: "1000" },
            { words: "You would need to use a third-party service.", startTimeMs: "2000" },
          ]
        }
      };
    } catch (error) {
      console.error('Error getting lyrics:', error);
      throw error;
    }
  }
}

export default SpotifyService;
