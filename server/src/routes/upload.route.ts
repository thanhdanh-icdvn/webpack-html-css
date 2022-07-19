import { verifyToken } from './../middlewares/auth.middleware';
import { Router } from 'express';
import UploadController from '../controllers/upload.controller';
import {
  uploadSingleMiddleWare,
  uploadMultipleMiddleWare,
  uploadPhotoMiddleware
} from '../middlewares/upload.middleware';
import { cloudinaryGetAllResources, cloudinaryGetResourceByName, cloudinaryUploadSingle } from '../middlewares/cloudinary.middleware';

export const UploadRouter = Router();
UploadRouter.route('/single').post(verifyToken,uploadSingleMiddleWare, UploadController.uploadSingleFile);
UploadRouter.route('/multiple').post(verifyToken,uploadMultipleMiddleWare, UploadController.uploadMultipleFile);
UploadRouter.route('/photos').post(verifyToken,uploadPhotoMiddleware, UploadController.uploadMultipleFile);
UploadRouter.route('/cloudinary/single').post(verifyToken,uploadSingleMiddleWare, cloudinaryUploadSingle);
UploadRouter.route('/cloudinary/resources').get(verifyToken,cloudinaryGetAllResources);
UploadRouter.route('/cloudinary/resources/:name').get(verifyToken,cloudinaryGetResourceByName);