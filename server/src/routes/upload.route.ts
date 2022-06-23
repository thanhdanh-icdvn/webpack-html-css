import { Router } from 'express';
import UploadController from '../controllers/upload.controller';
import {
  uploadSingleMiddleWare,
  uploadMultipleMiddleWare,
  uploadPhotoMiddleware
} from '../middlewares/upload.middleware';

export const UploadRouter = Router();
UploadRouter.route('/single').post(uploadSingleMiddleWare, UploadController.uploadSingleFile);
UploadRouter.route('/multiple').post(uploadMultipleMiddleWare, UploadController.uploadMultipleFile);
UploadRouter.route('/photos').post(uploadPhotoMiddleware, UploadController.uploadMultipleFile);