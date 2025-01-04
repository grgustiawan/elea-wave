import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { styles } from "../style";
import React, { useEffect, useState } from 'react';
import { Artist } from "../../types/artist";
import { Album } from "../../types/album";
import { CategoryItem } from "../../types/category";
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ShowItem } from "@/types/savedAlbum";
import { fetchArtistData } from "@/service/artist";
import { fetchAlbumData, fetchSavedAlbum } from "@/service/album";
import { fetchCategories } from "@/service/category";
import { fetchAccessToken } from "@/service/authorization";
import HeaderLogo from "@/components/molecules/header";

export default function TabMainScreen() {
  const [artistData, setArtistData] = useState<Array<Artist> | null>(null);
  const [albumData, setAlbumData] = useState<Array<Album> | null>(null);
  const [categories, setCategories] = useState<Array<CategoryItem> | null>(null);
  const [savedAlbum, setSavedAlbum] = useState<Array<ShowItem>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await fetchAccessToken();
  
        const artists = await fetchArtistData(token);
        setArtistData(artists);
  
        const albums = await fetchAlbumData(token);
        setAlbumData(albums);
  
        // await fetchSavedAlbum(token);
  
        const category = await fetchCategories(token);
        setCategories(category);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderLogo />

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Top Artist</Text>
        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.artistsScroll}
        >
          {artistData?.map((artist) => (
            <TouchableOpacity key={artist.uri} style={styles.artistItem}>
              <LinearGradient
                colors={['#4158D0', '#C850C0', '#FFCC70']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientClip}
              >
                <Image
                  source={{ uri: artist.images[0].url }}
                  style={styles.artistImage}
                />
              </LinearGradient>
    
              <Text style={styles.artistName}>{artist.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>New Album</Text>
        {albumData?.map((album) => (
          <TouchableOpacity key={album.id} style={styles.bannerContainer}>
            <View style={styles.albumOverlay}></View>

            <MaterialIcons name="star" style={styles.saveAlbum} size={24} />
            <Feather name="star" style={styles.saveAlbum} size={24} />
            <Image
              source={{ uri: album.images[0].url }}
              style={styles.bannerImage}
            />
            <View style={styles.bannerContent}>
              <Text style={styles.bannerText}>
                {album.name}
              </Text>
              <View style={styles.albumArtist}>
                {album.artists.map((artist) => (
                  <Text key={artist.id} style={styles.bannerSubtext}>{artist.name}</Text>
                ))}
              </View>

              <Text style={styles.bannerSubtext}>{(album.album_type).toUpperCase()}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Popular Category</Text>
        <View style={styles.recentGrid}>
          {categories?.map((category) => (
            <TouchableOpacity key={category.id} style={styles.recentItem}>
              <Image source={{ uri: category.icons[0].url }} style={styles.recentImage} />
              <Text style={styles.trackTitle}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

