import { NextFunction, Request, Response } from 'express';
import { MulterError  } from 'multer';
import { MAX_FILE_COUNTS, upload, uploadWithFilter } from '../controllers/upload.controller';

/**
 * Upload single file middleware
 * @param req
 * @param res
 * @param next
 */
export const uploadSingleMiddleWare = (req: Request, res: Response, next: NextFunction): void => {
  const singleUpload = upload.single('single');
  singleUpload(req, res, (error) => {
    if (error instanceof MulterError) {
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
/**
 * Upload multiple file middleware
 * @param req
 * @param res
 * @param next
 */
export const uploadMultipleMiddleWare = (req: Request, res: Response, next: NextFunction): void => {
  const uploadMultiple = upload.array('multiple',MAX_FILE_COUNTS);
  uploadMultiple(req, res, (error) => {
    if (error instanceof MulterError) {
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
/**
 * Upload photo multiple file middleware
 * @param req
 * @param res
 * @param next
 */
export const uploadPhotoMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const uploadMultiple = uploadWithFilter().array('photo',MAX_FILE_COUNTS);
  uploadMultiple(req, res, (error) => {
    if (error instanceof MulterError) {
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