import Constants from 'expo-constants';
const config = Constants.manifest2.extra;

export const clientKey: string = config.expoClient.extra.client_key;

export const clientId: string = config.expoClient.extra.client_id;

export const apiUrl: string = config.expoClient.extra.apiUrl;

export const accountUrl: string = config.expoClient.extra.accountUrl;