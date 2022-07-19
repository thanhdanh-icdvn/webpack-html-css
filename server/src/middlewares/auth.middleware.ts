import { Profile as GoogleProfile, Strategy as GoogleStratery } from 'passport-google-oauth20';
import { NextFunction, Request, Response } from 'express';
import { Strategy as FacebookStrategy, Profile as FacebookProfile } from 'passport-facebook';
import { Strategy as GithubStrategy, Profile as GithubProfile } from 'passport-github2'
import { Strategy as LocalStrategy } from 'passport-local';
import { verify } from 'jsonwebtoken';
import passport from 'passport';
import {
  FACEBOOK_CLIENT_SECRET,
  FACEBOOK_CLIENT_ID,
  GOOGLE_CALLBACK_URI,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  TOKEN_SECRET,
  FACEBOOK_CALLBACK_URI,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITHUB_CALLBACK_URI
} from '../config';
import { log } from '../server';
import { decrypt } from '../utils/utils.encode';
import { IUser } from '../interfaces/users.interface';
import { UserModel } from '../models/users.model';

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
    (accessToken: string, _refreshToken: string, profile: GoogleProfile, done: (err?: Error | null | undefined, user?: GoogleProfile) => void) => {
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
  passport.use(new FacebookStrategy({
    clientID: FACEBOOK_CLIENT_ID as string,
    clientSecret: FACEBOOK_CLIENT_SECRET as string,
    callbackURL: FACEBOOK_CALLBACK_URI as string
  },
    (accessToken: string, _refreshToken: string, profile: FacebookProfile, done: (err?: Error | null, user?: FacebookProfile) => void) => {
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

export const githubPassportMiddleware = () => {
  passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID as string,
    clientSecret: GITHUB_CLIENT_SECRET as string,
    callbackURL: GITHUB_CALLBACK_URI as string
  },
    (accessToken: string, _refreshToken: string, profile: GithubProfile, done: (err?: Error | null, user?: GithubProfile) => void) => {
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

export const localPassportMiddleware = () => {
  passport.use(new LocalStrategy(
    function (username, password, done) {
      UserModel.findOne({ username: username }, (err: Error | null | undefined, user: IUser) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (decrypt(user.password) !== password) { return done(null, false); }
        return done(null, user);
      });
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