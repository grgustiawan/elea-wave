import { View, Image, TouchableOpacity, Text, SafeAreaView, TextInput } from "react-native";
import { styles } from "@/app/style";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

export default function HeaderLogo () {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState(''); 

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
        if (isSearchVisible) {
          setSearchQuery('');
        }
    };

    return (
        <SafeAreaView>
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
        </SafeAreaView>
    )
} 