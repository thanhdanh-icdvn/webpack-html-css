import { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import { MAX_FILE_COUNTS, upload } from '../controllers/upload.controller';

export const uploadSingleMiddleWare = (req: Request, res: Response, next: NextFunction): void => {
  const singleUpload = upload.single('single');
  singleUpload(req, res, (error) => {
    if (error instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      const {stack,...otherError} = error;
      return(res.status(400).json({
        code: 400,
        multerErrorCode:error.code,
        message: otherError
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

export const uploadMultipleMiddleWare = (req: Request, res: Response, next: NextFunction): void => {
  const uploadMultiple = upload.array('multiple',MAX_FILE_COUNTS);
  uploadMultiple(req, res, (error) => {
    if (error instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      const {stack,...otherError} = error;
      return(res.status(400).json({
        code: 400,
        multerErrorCode:error.code,
        message: otherError
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

export const uploadPhotoMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const uploadMultiple = upload.array('multiple',MAX_FILE_COUNTS);
  uploadMultiple(req, res, (error) => {
    if (error instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      const {stack, ...otherError} = error;
      return(res.status(400).json({
        code: 400,
        multerErrorCode:error.code,
        message: otherError
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