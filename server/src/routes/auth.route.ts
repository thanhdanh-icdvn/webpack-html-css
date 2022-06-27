import { Router } from 'express';
import passport from 'passport';
import { AuthController } from '../controllers/auth.controller';

export const AuthRouter = Router();
AuthRouter.route('/register').post(AuthController.registerUser);
AuthRouter.route('/login').post(AuthController.login);
AuthRouter.route('/google').get(
  passport.authenticate('google', {
    scope: ['openid','email', 'profile']
  }));
AuthRouter.route('/google/callback').get(passport.authenticate('google', {
  successRedirect: '/api/v1',
  failureRedirect: '/api/v1/auth/google'
}));