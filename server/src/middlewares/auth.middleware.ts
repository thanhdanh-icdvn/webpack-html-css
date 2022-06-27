import { UserModel } from './../models/users.model';
import { Profile, Strategy as GoogleStratery } from 'passport-google-oauth20';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import passport from 'passport';
import { GOOGLE_CALLBACK_URI, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, TOKEN_SECRET } from '../config';
import { log } from '../server';

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
export const googlePassportMiddleware = () => {
  passport.use(new GoogleStratery(
    {
      clientID: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SECRET as string,
      callbackURL: GOOGLE_CALLBACK_URI as string
    },
    (request:any, accessToken:any, refreshToken:any, profile:any, done:any) => {
      log.info(profile)
      return done(null, profile);
    }
  ));
  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });

  passport.deserializeUser((obj:any, cb) => {
    cb(null, obj);
  });
}