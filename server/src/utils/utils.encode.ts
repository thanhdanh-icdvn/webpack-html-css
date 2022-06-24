import { AES, enc, lib } from 'crypto-js';
import * as dotenv from 'dotenv';
import path from 'path';
import { Logger } from 'tslog';
// Load config form .env file
dotenv.config({
  path: (path.resolve(__dirname, '../../.env.local'))
});

const log: Logger = new Logger();
export const PASSWORD_SECRET = process.env.PASSWORD_SECRET + '';
/**
 * Encrypt password to hash
 * @param content
 * @param secret
 * @returns Encrypted password
 */
export const encrypt = (content = '', secret: string = PASSWORD_SECRET) => {
  const encypted = AES.encrypt(content, secret).toString();
  log.debug(encypted);
  return encypted;
};
/**
 * Decrypt hash to password
 * @param crypted
 * @param secret
 * @returns Decrypted password
 */
export const decrypt = (crypted = '', secret: string = PASSWORD_SECRET) => {
  const decrypted = AES.decrypt(crypted, secret).toString(enc.Utf8);
  log.debug(decrypted);
  return decrypted;
};
/**
 * Encrypt string to base 64
 * @param stringSource
 * @returns Hex string
 */
export const encryptBase64 = (stringSource: string) => {
  return enc.Base64.parse(stringSource.toString());
};
/**
 *
 * @param base64Value Decrypt from base 64 to normal text
 * @returns string
 */
export const decryptBase64 = (base64Value: lib.WordArray) => {
  return enc.Base64.stringify(base64Value);
};