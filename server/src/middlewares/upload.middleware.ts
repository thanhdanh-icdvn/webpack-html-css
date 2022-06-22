import { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import { upload } from '../controllers/upload.controller';

export const uploadSingleMiddleWare = (req: Request, res: Response, next: NextFunction): void => {
  const singleUpload = upload.single('single');
  singleUpload(req, res, (error) => {
    if (error instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      return(res.status(400).json({
        code: 400,
        message: `${error.name}. ${error.message}`
      }));
    } else if (error) {
      // An unknown error occurred when uploading.
      return(res.status(500).json({
        code: 500,
        message: 'Server error. ' + error
      }));
    }
    next();
  });
};
