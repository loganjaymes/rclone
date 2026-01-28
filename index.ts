import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import * as dotenv from 'dotenv';

dotenv.config()

const sdk = SpotifyApi.withUserAuthorization(process.env.SPOTIFY_CLIENT_ID!, process.env.SPOTIFY_CLIENT_SECRET!, ["user-top-read"]);