import axios from "axios";
import { Artist } from "@/types/artist";
import { apiUrl } from "@/utils/config";
import { getRandomObjects } from "@/utils/helper";

export const fetchArtistData = async (token: string): Promise<Array<Artist> | null> => {
    try {
        const { data } = await axios.get(`${apiUrl}/search?q=artist&type=artist`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return getRandomObjects(data.artists.items, 20);
    } catch (error) {
        console.error('Error fetching artist data:', error);

        return null;
    }
};