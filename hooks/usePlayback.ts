import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

export function usePlayback() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playSound = async (songId: string, audioUrl?: string) => {
    if (!audioUrl) return;

    try {
      if (sound) {
        await sound.unloadAsync();
      }

      if (currentSongId === songId && isPlaying) {
        setIsPlaying(false);
        return;
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: audioUrl },
        { shouldPlay: true }
      );

      setSound(newSound);
      setIsPlaying(true);
      setCurrentSongId(songId);

      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status && 'isPlaying' in status) {
          setIsPlaying(status.isPlaying);
        }
      });

    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  return {
    playSound,
    isPlaying,
    currentSongId,
  };
}