import { sign } from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config';
export const generateAccessToken = (tokenData: string | object | Buffer,expiresIn:string | number | undefined ='3h') => {
  return sign(tokenData, TOKEN_SECRET as string, { expiresIn: expiresIn});
};