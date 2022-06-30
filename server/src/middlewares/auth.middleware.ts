import { Profile as GoogleProfile, Strategy as GoogleStratery } from 'passport-google-oauth20';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import passport from 'passport';
import { FACEBOOK_CLIENT_SECRET, FACEBOOK_CLIENT_ID, GOOGLE_CALLBACK_URI, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, TOKEN_SECRET, FACEBOOK_CALLBACK_URI } from '../config';
import { log } from '../server';
import { Strategy as FacebookStratery, Profile as FacebookProfile } from 'passport-facebook';

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
    (accessToken: string, refreshToken: string, profile: GoogleProfile, done: (err?: Error|null|undefined, user?: GoogleProfile) => void) => {
      log.info(accessToken, profile);
      return done(null, profile);
    }
  ));
  passport.serializeUser((user: Express.User, done) => {
    log.info(user);
    done(null, user);
  });

  passport.deserializeUser((userId: string, done) => {
    log.info(userId);
    done(null, userId);
  });
}

export const facebookPassportMiddleware = () => {
  passport.use(new FacebookStratery({
    clientID: FACEBOOK_CLIENT_ID as string,
    clientSecret: FACEBOOK_CLIENT_SECRET as string,
    callbackURL: FACEBOOK_CALLBACK_URI as string
  },
    (accessToken: string, refreshToken: string, profile: FacebookProfile, done: (err?: Error | null, user?: FacebookProfile) => void) => {
      log.info(accessToken, profile);
      return done(null, profile);
    }
  ));
  passport.serializeUser((user: Express.User, done) => {
    log.info(user);
    done(null, user);
  });

  passport.deserializeUser((userId: string, done) => {
    log.info(userId);
    done(null, userId);
  });
}