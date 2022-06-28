import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: (path.resolve(__dirname, '../../.env.local'))
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
  FACEBOOK_CALLBACK_URI
} = process.env;