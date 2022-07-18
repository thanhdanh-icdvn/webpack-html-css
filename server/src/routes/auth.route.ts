import { Router } from 'express';
import passport from 'passport';
import { CLIENT_HOST_NAME, CLIENT_PORT } from '../config';
import { AuthController } from '../controllers/auth.controller';

const clientURI = `${CLIENT_HOST_NAME}:${CLIENT_PORT}`
const clientLoginURI = `${clientURI}/login`
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
    res.redirect(clientURI)
  } catch (error) {
    res.status(401).json({
      code: 401,
      message: 'Login with facebook failed.Details: ' + error
    })
  }
});
AuthRouter.route('/google/failed').get(async function (req, res) {
  res.redirect(clientLoginURI)
});

AuthRouter.route('/currentUser').get(async function (req, res) {
  try {
    res.status(200).json({
      code: 200,
      message: 'Get user login',
      user: req.user
    })
  } catch (error) {
    res.status(401).json({
      code: 401,
      message: 'Get user login failed. Detail: ' + error,
    })
  }
});

AuthRouter.route('/facebook').get(
  passport.authenticate('facebook', {
    scope: ['email', 'user_location']
  }));
AuthRouter.route('/facebook/callback').get(passport.authenticate('facebook', {
  successReturnToOrRedirect: '/api/v1/auth/facebook/success',
  failureRedirect: '/api/v1/auth/facebook/failed',
  failureMessage: true
}));
AuthRouter.route('/facebook/success').get(async function (req, res) {
  try {
    res.redirect(clientURI)
  } catch (error) {
    res.status(401).json({
      code: 401,
      message: 'Login with facebook failed.Details: ' + error
    })
  }
});
AuthRouter.route('/facebook/failed').get(async function (req, res) {
  res.redirect(clientLoginURI)
});

AuthRouter.route('/github').get(
  passport.authenticate('github', {
    scope: ['user:email']
  }));
AuthRouter.route('/github/callback').get(passport.authenticate('github', {
  successReturnToOrRedirect: '/api/v1/auth/github/success',
  failureRedirect: '/api/v1/auth/github/failed',
  failureMessage: true
}));
AuthRouter.route('/github/success').get(async function (req, res) {
  try {
    res.redirect(clientURI)
  } catch (error) {
    res.status(401).json({
      code: 401,
      message: 'Login with github failed.Details: ' + error
    })
  }
});
AuthRouter.route('/github/failed').get(async function (req, res) {
  res.redirect(clientLoginURI)
});

AuthRouter.route('/logout').get(async function (req, res) {
  req.logout({ keepSessionInfo: false }, (error) => {
    if (error) {
      res.status(500).json({
        code: 500,
        message: error
      })
    }
  })
  res.redirect(clientLoginURI)
});