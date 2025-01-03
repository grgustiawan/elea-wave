// app.config.js
import "dotenv/config";

export default {
  expo: {
    name: "EleaMusic",
    slug: "elea-music",
    version: "1.0.0",
    extra: {
      apiUrl: process.env.API_URL,
      accountUrl: process.env.ACCOUNT_URL,
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_key: process.env.SPOTIFY_CLIENT_KEY,
    },
  },
};
