import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

export const AuthRouter = Router();
AuthRouter.route('/login').post(AuthController.login);