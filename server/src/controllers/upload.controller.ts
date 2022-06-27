import path from 'path';
import fs from 'fs';
import { Logger } from 'tslog';
import {Request, Response } from 'express';
import multer, { Multer } from 'multer';
import { encryptBase64 } from '../utils/utils.encode';

const log: Logger = new Logger();
/**
 * Upload variables
 */
export const UPLOAD_FOLDER = path.resolve(process.cwd(), 'uploads');
export const MAX_SIZE = 100 * 1024 * 1024;// 100MB
export const MAX_FILE_COUNTS = 20;
/**
 * Upload storage
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(UPLOAD_FOLDER)) {
      fs.mkdirSync(UPLOAD_FOLDER);
    }
    cb(null, UPLOAD_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileNameTransfromed = file.originalname;
    log.debug(fileNameTransfromed);
    cb(null, fileNameTransfromed);
  },
});

export const upload = multer({
  storage,
  limits: {
    fileSize: MAX_SIZE,
    files: 20
  }
});
export const uploadWithFilter = (filter=(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)):Multer => {
  return multer({
    storage,
    limits: {
      fileSize: MAX_SIZE,
      files: 20
    },
    fileFilter(req, file, callback) {
      if (!file.originalname.match(filter)) {
        return callback(new Error('Only image files are allowed!'));
      }
      callback(null, true);
    },
  });
};
/**
 * Upload controller
 */
class UploadController {
  /**
   * Upload single file
   * @param req
   * @param res json respone
   * @returns Uploaded file or undefine
   */
  static async uploadSingleFile(req: Request, res: Response){
    try {
      const file = await req.file;
      if (!file?.fieldname) {
        return res.status(400).json({
          code: 400,
          message: 'Invalid field name'
        });
      }
      if (!file) {
        return res.status(400).json({
          code: 400,
          message: 'Please upload a file'
        });
      }
      return res.status(201).json({
        code: 201,
        message: 'Upload file successfully',
        data: file
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        message: 'Internal server error. ' + error
      });
    }
  }
  /**
   * Upload multiple files
   * @param req
   * @param res
   * @returns
   */
  static async uploadMultipleFile(req: Request, res: Response){
    try {
      const files = req.files;
      log.debug(files);
      if (!files) {
        return res.status(400).json({
          code: 400,
          message: 'Please choose files'
        });
      }
      return res.status(201).json({
        code: 201,
        message: 'Upload file successfully',
        data: files
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        message: 'Internal server error. ' + error
      });
    }
  }
  /**
   * Insert file into mongo db
   * @param req
   * @param res
   * @returns
   */
  static async photoInDB(req: Request, res: Response){
    try {
      const img = fs.readFileSync(req.file?.path || '', { encoding: 'utf8', flag: 'r' });
      const encodedImage = encryptBase64(img.toString()).toString();

      const finalImage = {
        contentType: req.file?.mimetype,
        image: Buffer.from(encodedImage, 'base64')
      };
      log.debug(finalImage);
      return res.status(201).json({
        code: 201,
        data: finalImage
      });
    } catch (error) {
      return res.status(400).json({
        code: 400,
        message: 'Save file to db failed. ' + error
      });
    }
  }
}

export default UploadController;