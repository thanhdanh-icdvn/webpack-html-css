import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

export const AuthRouter = Router();
AuthRouter.route('/register').post(AuthController.registerUser);
AuthRouter.route('/login').post(AuthController.login);