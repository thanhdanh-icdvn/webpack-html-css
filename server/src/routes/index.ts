/**
 * Libary import
 */
import { Router } from 'express';
/**
 * App import
 */
import { UploadRouter } from './upload.route';
import { UserRouter } from './users.route';
import { AuthRouter } from './auth.route';
import { SendMailRouter } from './send-mail.route';
import { FileRouter } from './files.route';
import { FirebaseAuthRouter } from './firebase.route';

export const appRoutes = Router();
appRoutes.use('/auth',AuthRouter);
appRoutes.use('/users',UserRouter);
appRoutes.use('/upload',UploadRouter);
appRoutes.use('/files',FileRouter);
appRoutes.use('/send-mail',SendMailRouter);
appRoutes.use('/firebase',FirebaseAuthRouter);