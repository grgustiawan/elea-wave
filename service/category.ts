import axios from "axios";
import { apiUrl } from "@/utils/config";
import { CategoryItem } from "@/types/category";
import { getRandomObjects } from "@/utils/helper";

export const fetchCategories = async (token: string): Promise<Array<CategoryItem> | null> => {
    try {
        const { data } = await axios.get(`${apiUrl}/browse/categories`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        
        return getRandomObjects(data.categories.items, 6);
    } catch(error){
        console.error('Error fetching artist data:', error);

        return null;
    }
}