import { sign } from 'jsonwebtoken';
import 'dotenv';
import { TOKEN_SECRET } from '../server';
export const generateAccessToken = (tokenData: string | object | Buffer) => {
  return sign(tokenData, TOKEN_SECRET as string, { expiresIn: '3h' });
};