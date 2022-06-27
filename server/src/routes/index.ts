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

export const appRoutes = Router();
appRoutes.use('/auth',AuthRouter);
appRoutes.use('/users',UserRouter);
appRoutes.use('/upload',UploadRouter);
appRoutes.use('/upload',UploadRouter);
appRoutes.use('/send-mail',SendMailRouter);
