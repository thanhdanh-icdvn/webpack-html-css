import { Router } from 'express';
import { verifyToken } from './../middlewares/auth.middleware';
import FileController from '../controllers/file.controller';

export const FileRouter = Router();
FileRouter.route('/downloads/single').get(verifyToken,FileController.downloadFileSingle);
FileRouter.route('/list-files').get(verifyToken,FileController.getListFiles);