import { Router } from 'express';
import passport from 'passport';
import { AuthController } from '../controllers/auth.controller';

export const AuthRouter = Router();
AuthRouter.route('/register').post(AuthController.registerUser);
AuthRouter.route('/login').post(AuthController.login);
AuthRouter.route('/google').get(
  passport.authenticate('google', {
    scope: ['openid', 'email', 'profile']
  }));
AuthRouter.route('/google/callback').get(passport.authenticate('google', {
  successReturnToOrRedirect: '/api/v1/auth/google/success',
  failureRedirect: '/api/v1/auth/google/failed'
}));
AuthRouter.route('/google/success').get(async function (req, res) {
 try {
  return await res.status(200).json({
    user: req.user
  })
 } catch (error) {
  return await res.status(400).json({
    code:400,
    message:error
  })
 }
});
AuthRouter.route('/facebook').get(
  passport.authenticate('facebook', {
    scope: ['openid', 'email', 'profile']
  }));
AuthRouter.route('/facebook/callback').get(passport.authenticate('facebook', {
  successReturnToOrRedirect: '/api/v1/auth/facebook/sucess',
  failureRedirect: '/api/v1/auth/facebook/failed'
}));
AuthRouter.route('/facebook/success').get(async function (req, res) {
  return await res.status(200).json({
    user: req.user
  })
});