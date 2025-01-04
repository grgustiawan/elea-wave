import axios from "axios";
import { Album } from "@/types/album";
import { ShowItem } from "@/types/savedAlbum";
import { apiUrl } from "@/utils/config";
import { getRandomObjects } from "@/utils/helper";

export const fetchAlbumData = async (token: string): Promise<Array<Album> | null> => {
    try {
        const { data } = await axios.get(`${apiUrl}/browse/new-releases`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return getRandomObjects(data.albums.items, 1);
    } catch (error) {
        console.error('Error fetching album data:', error);
        return null;
    }
};

export const fetchSavedAlbum = async (token: string): Promise<Array<ShowItem> | null> => {
    const url = `${apiUrl}/me`;

    try {
        const { data } = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                limit: 20,
                offset: 0,
                market: 'ID'
            }
        });

        
        console.log('saved album:', data);
        return data.items;
    } catch (error: any) {
        console.error('Error fetching saved album:', error.response.data);

        return null;
    }
}