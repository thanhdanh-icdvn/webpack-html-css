import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { TOKEN_SECRET } from '../server';

export const verifyToken = (req: Request, res: Response,next:NextFunction)=>{
  const token = req.body.token || req.query.token || req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }
  try {
    const decoded = verify(token, TOKEN_SECRET as string);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({
      code:401,
      message:'Invalid access token'
    });
  }
  return next();
};