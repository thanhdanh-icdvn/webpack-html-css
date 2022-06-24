import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { TOKEN_SECRET } from '../server';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.query.token?.toString() || req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(403).json({
      code: 403,
      message: 'A token is required for authentication'
    });
  } else {
    const decoded = verify(token, TOKEN_SECRET as string);
    if (decoded) {
      return next();
    } else {
      return res.status(401).json({
        code: 401,
        message: 'Invalid token'
      });
    }
  }
};