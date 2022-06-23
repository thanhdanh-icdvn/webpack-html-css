import { verifyToken } from './../middlewares/auth.middleware';
import { Router } from 'express';
import UploadController from '../controllers/upload.controller';
import {
  uploadSingleMiddleWare,
  uploadMultipleMiddleWare,
  uploadPhotoMiddleware
} from '../middlewares/upload.middleware';

export const UploadRouter = Router();
UploadRouter.route('/single').post(verifyToken,uploadSingleMiddleWare, UploadController.uploadSingleFile);
UploadRouter.route('/multiple').post(verifyToken,uploadMultipleMiddleWare, UploadController.uploadMultipleFile);
UploadRouter.route('/photos').post(verifyToken,uploadPhotoMiddleware, UploadController.uploadMultipleFile);