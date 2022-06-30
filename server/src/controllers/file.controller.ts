import { Request, Response } from 'express';
import { log } from '../server';
import { UPLOAD_FOLDER } from './upload.controller';
import fs from 'fs';
export class FileController{
  /**
   * Download file
   * @param req
   * @param res
   */
   static async downloadFileSingle(req: Request, res: Response) {
    try {
      const fileName = req.query.name;
      const directoryPath = UPLOAD_FOLDER +'/'+ fileName;
      log.debug(directoryPath);
      res.download(directoryPath, (err) => {
        if (err) {
          res.status(500).send({
            message: 'Could not download the file. ' + err,
          });
        }
      });
    } catch (error) {
      res.status(500).send({
        code: 500,
        message: 'Error occure. ' + error
      });
    }
  }

  /**
   * Get file list
   * @param req
   * @param res
   */
   static async getListFiles(req: Request, res: Response) {
    const directoryPath = UPLOAD_FOLDER;
    try {
      fs.readdir(directoryPath, (err, files) => {
        if (err) {
          res.status(500).json({
            code: 500,
            message: 'Unable to scan files!',
          });
        }
        const fileInfos: unknown[] = [];
        files.forEach((file) => {
          fileInfos.push({
            name: file,
            url: directoryPath + file,
          });
        });
        res.status(200).json({
          code: 200,
          data: fileInfos
        });
      });
    } catch (error) {
      res.status(500).send({
        code: 500,
        message: 'Error occure. ' + error
      });
    }
  }
}
export default FileController;