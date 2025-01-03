import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
  logo:{
    width: 24,
    height: 24
  },
  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 16,
  },
  artistsScroll: {
    marginBottom: 16,
  },
  artistItem: {
    alignItems: "center",
    marginRight: 16,
  },
  artistImage: {
    width: 75,
    height: 75,
    borderRadius: 40,
  },
  gradientClip: {
    borderRadius: 50,
    padding: 3.5,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 5
  },
  artistName: {
    fontSize: 12,
    textAlign: "center",
  },
  bannerContainer: {
    position: 'relative',
    height: 160,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },
  bannerImage: {
    width: "100%",
    height: "100%"
  },
  bannerContent: {
    position: "absolute",
    bottom: 16,
    left: 16,
  },
  bannerText: {
    position: 'relative',
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    zIndex: 11,
  },
  bannerSubtext: {
    position: 'relative',
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
    zIndex: 11,
  },
  albumTypes:{
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 5,
    backgroundColor: '#dee2ff',
    borderRadius: 50
  },
  albumOverlay: {
    position: 'absolute',
    backgroundColor: '#344e41',
    opacity: 0.3,
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: 10
  },
  recentGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  recentItem: {
    width: "30%",
    marginBottom: 16,
  },
  recentImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 8,
    marginBottom: 8,
  },
  trackTitle: {
    fontSize: 14,
    fontWeight: "500",
  },
  trackArtist: {
    fontSize: 12,
    color: "#666",
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  featuredContainer: {
    margin: 20,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredContent: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  featuredTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  featuredArtist: {
    color: '#fff',
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  playButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  viewAll: {
    color: '#666',
  },
  songCard: {
    width: 150,
    marginLeft: 20,
  },
  songImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  playOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8,
  },
  songArtist: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  playlistImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
  playlistInfo: {
    flex: 1,
    marginLeft: 15,
  },
  playlistTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  playlistArtist: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  moreButton: {
    padding: 10,
  },
  albumArtist: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: -20,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#84a98c',
  },
  searchInput: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 16,
  },
  saveAlbum: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 12,
    color: '#fdffb6'
  },
});
