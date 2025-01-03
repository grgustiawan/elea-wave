import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { usePlayback } from '../../hooks/usePlayback';
import { styles } from '../style';
import axios from 'axios';

interface Song {
  id: string;
  title: string;
  artist: string;
  image: string;
  audioUrl?: string;
}

export default function ExploreScreen() {
  const { playSound, isPlaying, currentSongId } = usePlayback();
  const [audioBook, setAudioBook] = useState<string | null>(null);

  const recentlyPlayed: Song[] = [
    {
      id: '1',
      title: 'Better',
      artist: 'Khalid',
      image: '/placeholder.svg',
      audioUrl: 'https://example.com/better.mp3'
    },
    {
      id: '2',
      title: 'Style',
      artist: 'Taylor Swift',
      image: '/placeholder.svg',
      audioUrl: 'https://example.com/style.mp3'
    },
    {
      id: '3',
      title: 'Ghost',
      artist: 'Justin Bieber',
      image: '/placeholder.svg',
      audioUrl: 'https://example.com/ghost.mp3'
    },
  ];

  const dailyPlaylist: Song[] = [
    {
      id: '4',
      title: 'Greedy',
      artist: 'Tate McRae',
      image: '/placeholder.svg',
      audioUrl: 'https://example.com/greedy.mp3'
    },
  ];

  const featuredSong: Song = {
    id: '5',
    title: 'Left and Right',
    artist: 'Charlie Puth Ft. Jung Kook of BTS',
    image: '/placeholder.svg',
    audioUrl: 'https://example.com/leftandright.mp3'
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <TouchableOpacity 
          style={styles.featuredContainer}
          onPress={() => playSound(featuredSong.id, featuredSong.audioUrl)}
        >
          <Image
            source={{ uri: featuredSong.image }}
            style={styles.featuredImage}
          />
          <View style={styles.featuredContent}>
            <Text style={styles.featuredTitle}>{featuredSong.title}</Text>
            <Text style={styles.featuredArtist}>{featuredSong.artist}</Text>
          </View>
          <TouchableOpacity 
            style={styles.playButton}
            onPress={() => playSound(featuredSong.id, featuredSong.audioUrl)}
          >
            <Ionicons 
              name={isPlaying && currentSongId === featuredSong.id ? "pause" : "play"} 
              size={24} 
              color="#000" 
            />
          </TouchableOpacity>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recently Played</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recentlyPlayed.map((song) => (
              <TouchableOpacity 
                key={song.id} 
                style={styles.songCard}
                onPress={() => playSound(song.id, song.audioUrl)}
              >
                <Image source={{ uri: song.image }} style={styles.songImage} />
                <View style={styles.playOverlay}>
                  <Ionicons 
                    name={isPlaying && currentSongId === song.id ? "pause" : "play"} 
                    size={24} 
                    color="#fff" 
                  />
                </View>
                <Text style={styles.songTitle}>{song.title}</Text>
                <Text style={styles.songArtist}>{song.artist}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Daily Playlist</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          {dailyPlaylist.map((song) => (
            <TouchableOpacity 
              key={song.id}
              style={styles.playlistItem}
              onPress={() => playSound(song.id, song.audioUrl)}
            >
              <Image source={{ uri: song.image }} style={styles.playlistImage} />
              <View style={styles.playlistInfo}>
                <Text style={styles.playlistTitle}>{song.title}</Text>
                <Text style={styles.playlistArtist}>{song.artist}</Text>
              </View>
              <TouchableOpacity style={styles.moreButton}>
                <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}