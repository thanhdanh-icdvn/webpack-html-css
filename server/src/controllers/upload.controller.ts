import { encryptBase64 } from '../utils/utils.encode';
import { NextFunction, Request, Response } from 'express';
import multer, {  } from 'multer';
import fs from 'fs';
import { Logger } from 'tslog';
import path from 'path';

const log: Logger = new Logger();
/**
 * Upload variables
 */
export const UPLOAD_FOLDER = path.resolve(process.cwd(),'uploads');
export const MAX_SIZE = 10 * 1024 * 1024;// 10MB
export const MAX_FILE_COUNTS = 2;
/**
 * Upload storage
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(UPLOAD_FOLDER)){
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
  limits:{
    fileSize: MAX_SIZE,
    files: 20
  },
});
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
  static async uploadSingleFile(req: Request, res: Response,next:NextFunction): Promise<any> {
    try {
      const file = await req.file;
      if(!file?.fieldname){
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
  static async uploadMultipleFile(req: Request, res: Response): Promise<any> {
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
  static async photoInDB(req: Request, res: Response): Promise<any> {
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
  /**
   * Get file list
   * @param req
   * @param res
   */
  static async getListFiles(req:Request,res:Response):Promise<any> {
    const directoryPath = UPLOAD_FOLDER;
   try {
    fs.readdir(directoryPath, (err, files) =>{
      if (err) {
        res.status(500).send({
          message: 'Unable to scan files!',
        });
      }
      const fileInfos:any[] = [];
      files.forEach((file) => {
        fileInfos.push({
          name: file,
          url: directoryPath + file,
        });
      });
      res.status(200).send(fileInfos);
    });
   } catch (error) {
    res.status(500).send({
      code:500,
      message:'Error occure. '+ error
    });
   }
  }

  /**
   * Download file
   * @param req
   * @param res
   */
  static async downloadFile(req:Request,res:Response){
    try {
    const fileName = req.params.name;
    const directoryPath =UPLOAD_FOLDER;
    res.download(directoryPath + fileName, fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: 'Could not download the file. ' + err,
        });
      }
    });
    } catch (error) {
      res.status(500).send({
        code:500,
        message:'Error occure. '+ error
      });
    }
  }
  static async multerFilter(req:Request,file:any,callback:any):Promise<any>{
    try {
      if (!file.originalname.match(/\.(png|jpg)$/)) {
        // upload only png and jpg format
      return callback(new Error('Please upload a Image'));
    }
    callback(null, true);
    } catch (error) {
      callback(new Error(JSON.stringify(error)));
    }
  }
}

export default UploadController;