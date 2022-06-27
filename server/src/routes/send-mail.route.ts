import { Router } from 'express';
import { verifyToken } from '../middlewares/auth.middleware';
import { sendMail } from '../middlewares/send-mail.middleware';

export const SendMailRouter = Router();
SendMailRouter.route('/').post(verifyToken,sendMail);
