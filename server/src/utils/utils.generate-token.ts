import { sign } from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config';
export const generateAccessToken = (tokenData: string | object | Buffer) => {
  return sign(tokenData, TOKEN_SECRET as string, { expiresIn: '3h' });
};