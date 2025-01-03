import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function PlayerScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#121212', '#121212']} style={styles.gradient}>
        <View style={styles.header}>
          <TouchableOpacity>
            <AntDesign name="down" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Now Playing</Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.albumArtContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/300' }}
            style={styles.albumArt}
          />
        </View>

        <View style={styles.songInfoContainer}>
          <Text style={styles.songTitle}>Song Title</Text>
          <Text style={styles.artistName}>Artist Name</Text>
        </View>

        <View style={styles.progressContainer}>
          <Slider
            style={styles.progressBar}
            value={0.5}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#1DB954"
            maximumTrackTintColor="#ffffff50"
            thumbTintColor="#ffffff"
          />
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>0:00</Text>
            <Text style={styles.timeText}>3:30</Text>
          </View>
        </View>

        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.controlButton}>
            <Ionicons name="shuffle" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Ionicons name="play-skip-back-sharp" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Ionicons name="play-skip-forward-sharp" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Ionicons name="repeat" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.lyricsContainer}>
          <View style={styles.lyricsHeader}>
            <Text style={styles.lyricsTitle}>Lyrics</Text>
            <View style={styles.lyricsButtons}>
              <TouchableOpacity>
                <MaterialIcons name="open-in-new" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name="expand-more" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.lyricsText}>This is a placeholder for lyrics</Text>
          <Text style={styles.lyricsText}>Add your lyrics here</Text>
          <Text style={styles.lyricsText}>Line by line</Text>
          <Text style={styles.lyricsText}>As needed</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  albumArtContainer: {
    width: width - 40,
    aspectRatio: 1,
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  albumArt: {
    width: '100%',
    height: '100%',
  },
  songInfoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  songTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  artistName: {
    color: '#b3b3b3',
    fontSize: 18,
    marginTop: 5,
  },
  progressContainer: {
    marginTop: 20,
  },
  progressBar: {
    width: '100%',
    height: 40,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -10,
  },
  timeText: {
    color: '#b3b3b3',
    fontSize: 12,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  controlButton: {
    padding: 10,
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1DB954',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lyricsContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#282828',
    borderRadius: 10,
  },
  lyricsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  lyricsTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  lyricsButtons: {
    flexDirection: 'row',
    gap: 15,
  },
  lyricsText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
});

