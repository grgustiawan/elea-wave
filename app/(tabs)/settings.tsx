import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AppPreferencesScreen() {
  const navigation = useNavigation();
  const [searchHistory, setSearchHistory] = useState(false);
  const [popUpMessages, setPopUpMessages] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>App Preferences</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionHeader}>GENERAL</Text>
        
        <TouchableOpacity style={styles.navigationItem}>
          <View>
            <Text style={styles.itemTitle}>Appereance</Text>
            <Text style={styles.itemSubtitle}>System Default</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />
        </TouchableOpacity>

        <View style={styles.toggleItem}>
          <View>
            <Text style={styles.itemTitle}>Enable Search History</Text>
            <Text style={styles.itemDescription}>
              Allow your recent searches to be saved. Data is stored locally on this device and is not uploaded to our servers.
            </Text>
          </View>
          <Switch
            value={searchHistory}
            onValueChange={setSearchHistory}
            trackColor={{ false: '#D1D1D6', true: '#34C759' }}
            ios_backgroundColor="#D1D1D6"
          />
        </View>

        <View style={styles.textItem}>
          <Text style={styles.itemTitle}>Confirm Location</Text>
          <Text style={styles.itemDescription}>
            When Luister has been inactive for a while, confirm where you'd like the music to play.
          </Text>
        </View>

        <Text style={styles.sectionHeader}>PRODUCT SETUP</Text>

        <View style={styles.toggleItem}>
          <View>
            <Text style={styles.itemTitle}>Allow Pop Up Messages</Text>
            <Text style={styles.itemDescription}>
              Allow your recent searches to be saved. Data is stored locally on this device and is not uploaded to our servers.
            </Text>
          </View>
          <Switch
            value={popUpMessages}
            onValueChange={setPopUpMessages}
            trackColor={{ false: '#D1D1D6', true: '#34C759' }}
            ios_backgroundColor="#D1D1D6"
          />
        </View>

        <TouchableOpacity style={styles.navigationItem}>
          <Text style={styles.itemTitle}>Installer Setup</Text>
          <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />
        </TouchableOpacity>

        <Text style={styles.sectionHeader}>APP VERSION</Text>

        <View style={styles.versionInfo}>
          <Text style={styles.itemTitle}>Version</Text>
          <Text style={styles.versionNumber}>11.2</Text>
        </View>

        <View style={styles.versionInfo}>
          <Text style={styles.itemTitle}>Build</Text>
          <Text style={styles.versionNumber}>4567382</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C6C6C8',
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    flex: 1,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6E6E73',
    marginTop: 24,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  navigationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C6C6C8',
  },
  toggleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C6C6C8',
  },
  textItem: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C6C6C8',
  },
  itemTitle: {
    fontSize: 17,
    color: '#000',
    marginBottom: 4,
  },
  itemSubtitle: {
    fontSize: 15,
    color: '#6E6E73',
  },
  itemDescription: {
    fontSize: 13,
    color: '#6E6E73',
    lineHeight: 18,
    maxWidth: '85%',
  },
  versionInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C6C6C8',
  },
  versionNumber: {
    fontSize: 17,
    color: '#6E6E73',
  },
});