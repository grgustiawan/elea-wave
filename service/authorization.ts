import { clientId, clientKey, accountUrl } from "@/utils/config";
import axios from "axios";

export const fetchAccessToken = async (): Promise<string> => {
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

        return response.data.access_token;
    } catch (error) {
        console.error('Error fetching access token:', error);
        return '';
    }
};