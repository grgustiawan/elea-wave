import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PlaylistItem {
  id: string;
  title: string;
  songs?: number;
  images: string[];
  isPinned?: boolean;
  artist?: string;
  album?: string;
  description?: string;
}

export default function LibraryScreen() {
  const yourPlaylists: PlaylistItem[] = [
    {
      id: '1',
      title: 'Hits Songs',
      songs: 20,
      images: [
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg'
      ],
      isPinned: true
    },
    {
      id: '2',
      title: 'Liked Songs',
      songs: 120,
      images: [
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg'
      ],
      isPinned: true
    }
  ];

  const recommendedPlaylists: PlaylistItem[] = [
    {
      id: '3',
      title: 'Queens of Pop',
      songs: 102,
      images: ['/placeholder.svg'],
      artist: 'Luister Music',
      description: 'Experience this playlist of the most formidable tunes by women in pop music.'
    }
  ];

  const recommendedSongs: PlaylistItem[] = [
    {
      id: '4',
      title: 'Cruel Summer',
      artist: 'Taylor Swift',
      album: 'Lover 2019',
      images: ['/placeholder.svg']
    },
    {
      id: '5',
      title: 'Love Story',
      artist: 'Taylor Swift',
      album: 'Fearless 2021',
      images: ['/placeholder.svg']
    }
  ];

  const PlaylistGrid = ({ images }: { images: string[] }) => (
    <View style={styles.gridContainer}>
      {images.map((image, index) => (
        <Image
          key={index}
          source={{ uri: image }}
          style={styles.gridImage}
        />
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Ionicons name="musical-notes" size={24} color="#6C63FF" />
          <Text style={styles.logoText}>Luister</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{ uri: '/placeholder.svg' }}
              style={styles.profilePic}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Playlist</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          
          {yourPlaylists.map((playlist) => (
            <TouchableOpacity key={playlist.id} style={styles.playlistItem}>
              <PlaylistGrid images={playlist.images} />
              <View style={styles.playlistInfo}>
                <Text style={styles.playlistTitle}>{playlist.title}</Text>
                {playlist.songs && (
                  <Text style={styles.playlistSongs}>{playlist.songs} Songs</Text>
                )}
              </View>
              {playlist.isPinned && (
                <TouchableOpacity style={styles.pinButton}>
                  <Ionicons name="star" size={24} color="#6C63FF" />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended Playlist</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          {recommendedPlaylists.map((playlist) => (
            <View key={playlist.id}>
              <TouchableOpacity style={styles.recommendedItem}>
                <Image
                  source={{ uri: playlist.images[0] }}
                  style={styles.recommendedImage}
                />
                <View style={styles.recommendedInfo}>
                  <Text style={styles.recommendedTitle}>{playlist.title}</Text>
                  <Text style={styles.recommendedSubtitle}>
                    {playlist.artist} • {playlist.songs} Songs
                  </Text>
                </View>
              </TouchableOpacity>
              {playlist.description && (
                <Text style={styles.recommendedDescription}>{playlist.description}</Text>
              )}
            </View>
          ))}

          {recommendedSongs.map((song) => (
            <TouchableOpacity key={song.id} style={styles.songItem}>
              <Image
                source={{ uri: song.images[0] }}
                style={styles.songImage}
              />
              <View style={styles.songInfo}>
                <Text style={styles.songTitle}>{song.title}</Text>
                <Text style={styles.songArtist}>
                  {song.artist} • {song.album}
                </Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginRight: 16,
  },
  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  content: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#666',
  },
  gridContainer: {
    width: 80,
    height: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridImage: {
    width: 38,
    height: 38,
    margin: 1,
    borderRadius: 4,
  },
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  playlistInfo: {
    flex: 1,
    marginLeft: 12,
  },
  playlistTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  playlistSongs: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  pinButton: {
    padding: 8,
  },
  recommendedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  recommendedImage: {
    width: 56,
    height: 56,
    borderRadius: 8,
  },
  recommendedInfo: {
    flex: 1,
    marginLeft: 12,
  },
  recommendedTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  recommendedSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  recommendedDescription: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  songImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  songInfo: {
    flex: 1,
    marginLeft: 12,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  songArtist: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  moreButton: {
    padding: 8,
  },
});