import { Router } from 'express';
import UploadController, { MAX_FILE_COUNTS, upload } from '../controllers/upload.controller';
import { uploadSingleMiddleWare } from '../middlewares/upload.middleware';

export const UploadRouter = Router();
UploadRouter.route('/single').post(uploadSingleMiddleWare,UploadController.uploadSingleFile);
UploadRouter.route('/multiple').post(upload.array('multiple',MAX_FILE_COUNTS),UploadController.uploadMultipleFile);
UploadRouter.route('/photos').post(upload.single('photo'),UploadController.uploadMultipleFile);