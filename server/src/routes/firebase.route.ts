import { Router } from 'express';
import { firebaseLoginByEmailAndPassword } from '../middlewares/firebase.auth.middleware';

export const FirebaseAuthRouter= Router();

FirebaseAuthRouter.route('/login-by-email').post(firebaseLoginByEmailAndPassword);