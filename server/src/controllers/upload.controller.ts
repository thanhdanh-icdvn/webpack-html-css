import { encryptBase64 } from '../utils/utils.encode';
import { Request, Response } from 'express';
import multer from 'multer';
import fs from 'fs';
import { Logger } from 'tslog';

const log: Logger = new Logger();
/**
 * Upload variables
 */
const UPLOAD_FOLDER = 'uploads';
/**
 * Upload storage
 */
const uploadStorage = multer.diskStorage({
  destination (req, file, callback) {
    callback(null, UPLOAD_FOLDER);
  },
  filename (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  },
});

const upload = multer({
  storage: uploadStorage,
});

/**
 * Upload controller
 */
class UploadController {
  /**
   *
   * @param req Upload single file
   * @param res
   * @returns
   */
  static async uploadSingleFile (req: Request, res: Response): Promise<any> {
    try {
      upload.single('single');
      const file = req.file;
      log.debug(file);
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
  static async uploadMultipleFile (req: Request, res: Response): Promise<any> {
    try {
      upload.single('multiple');
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
  static async photoInDB (req: Request, res: Response): Promise<any> {
    try {
      upload.single('picture');
      const img = fs.readFileSync(req.file?.path || '', { encoding: 'utf8', flag: 'r' });
      const encodedImage = encryptBase64(img.toString()).toString();

      const finalImage = {
        contentType:req.file?.mimetype,
        image:Buffer.from(encodedImage,'base64')
      };
      log.debug(finalImage);
      return res.status(201).json({
        code:201,
        data:finalImage
      });
    } catch (error) {
      return res.status(400).json({
        code:400,
        message:'Save file to db failed. '+ error
      });
    }
  }
}

export default UploadController;