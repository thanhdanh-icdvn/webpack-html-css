
import { Router } from 'express';
import {
  firebaseRegisterWithEmailAndPassword,
  firebaseLoginWithEmailAndPassword,
} from '../middlewares/firebase.auth.middleware';

export const FirebaseAuthRouter = Router();
FirebaseAuthRouter.route('/register-by-email').post(firebaseRegisterWithEmailAndPassword);
FirebaseAuthRouter.route('/login-by-email').post(firebaseLoginWithEmailAndPassword);