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
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Artist } from "../../types/artist";
import { Album } from "../../types/album";
import { CategoryItem } from "../../types/categories";
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { apiUrl, accountUrl, clientId, clientKey } from "../../utils/config";
import { getRandomObjects } from "../../utils/helper";
import { ShowItem } from "@/types/savedAlbum";

export default function TabMainScreen() {
  const [artistData, setArtistData] = useState<Array<Artist>>([]);
  const [albumData, setAlbumData] = useState<Array<Album>>([]);
  const [categories, setCategories] = useState<Array<CategoryItem>>([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); 
  const [savedAlbum, setSavedAlbum] = useState<Array<ShowItem>>([]);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const url = `${accountUrl}/token`;
      const data = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientKey
      });

      try {
        const response = await axios.post(url, data, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });

        const token = response.data.access_token;
        fetchArtistData(token);
        fetchAlbumData(token);
        fetchSavedAlbum(token);
        fetchCategories(token);
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };

    const fetchArtistData = async (token: string) => {
      const url = `${apiUrl}/search?q=artist&type=artist`;

      try {
        const {data} = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        setArtistData(getRandomObjects(data.artists.items, 20));
      } catch (error) {
        console.error('Error fetching artist data:', error);
      }
    };

    const fetchAlbumData = async (token: string) => {
      const url = `${apiUrl}/browse/new-releases`;

      try {
        const {data} = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        setAlbumData(getRandomObjects(data.albums.items, 1));
      } catch (error) {
        console.error('Error fetching artist data:', error);
      }
    };
    
    const fetchSavedAlbum = async (token: string) => {
      const url = `${apiUrl}/me`;

      try {
        const {data} = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            limit: 20,
            offset: 0,
            market: 'ID'
          }
        });
        
        // setSavedAlbum(data.items);
        console.log('saved album:', data);
      } catch (error: any) {
        console.error('Error fetching saved album:', error.response.data);
      }
    }

    const fetchCategories = async(token: string) => {
      const {data} = await axios.get(`${apiUrl}/browse/categories`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
      });
  
      setCategories(getRandomObjects(data.categories.items, 6))
    }

    fetchAccessToken();
  }, []);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    if (isSearchVisible) {
      setSearchQuery('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.logoText}>Elea Music</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={toggleSearch} style={styles.searchIcon}>
            <Feather name="search" size={24} color="black" />
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Image
              source={{ uri: "/placeholder.svg" }}
              style={styles.profilePic}
            />
          </TouchableOpacity>
        </View>
      </View>

      {isSearchVisible && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      )}

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Top Artist</Text>
        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.artistsScroll}
        >
          {artistData.map((artist) => (
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
        {albumData.map((album) => (
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
          {categories.map((category) => (
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

