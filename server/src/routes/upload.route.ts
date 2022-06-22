import { Router } from 'express';
import UploadController from '../controllers/upload.controller';

export const UploadRouter = Router();
UploadRouter.route('/single').post(UploadController.uploadSingleFile);
UploadRouter.route('/nultiple').post(UploadController.uploadMultipleFile);