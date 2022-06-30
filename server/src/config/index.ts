import * as dotenv from 'dotenv';
import path from 'path';
import { IFirebaseConfig } from '../interfaces/firebase.config.interface';

dotenv.config({
  path: (path.resolve(__dirname, '../../.env'))
});
export const {
  MONGO_URL_PREFIX,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_URL_POSTFIX,
  MONGO_OPTIONS,
  TOKEN_SECRET,

  MAIL_USERNAME,
  MAIL_PASSWORD,

  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URI,
  API_PREFIX,

  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  FACEBOOK_CALLBACK_URI,

  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} = process.env;

export const firebaseConfig:IFirebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
}