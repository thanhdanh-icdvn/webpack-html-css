import { AES, enc } from 'crypto-js';
import * as dotenv from 'dotenv';
import path from 'path';
import { Logger } from 'tslog';
// Load config form .env file
dotenv.config({
  path: (path.resolve(__dirname, '../../.env.local'))
});

const log: Logger = new Logger();
export const PASSWORD_SECRET = process.env.PASSWORD_SECRET+'';
/**
 * Encrypt password to hash
 * @param content
 * @param secret
 * @returns Encrypted password
 */
export const encrypt = (content: string='', secret: string=PASSWORD_SECRET) => {
  const encypted = AES.encrypt(content,secret).toString();
  log.debug(encypted);
  return encypted;
};
/**
 * Decrypt hash to password
 * @param crypted
 * @param secret
 * @returns Decrypted password
 */
export const decrypt = (crypted: string='', secret: string=PASSWORD_SECRET) => {
  const decrypted = AES.decrypt(crypted, secret).toString(enc.Utf8);
  log.debug(decrypted);
  return decrypted;
};

export const encryptBase64 = (stringSource:string)=>{
  return enc.Base64.parse(stringSource.toString());
};

export const decryptBase64 = (base64Value:any)=>{
  return enc.Base64.stringify(base64Value);
};