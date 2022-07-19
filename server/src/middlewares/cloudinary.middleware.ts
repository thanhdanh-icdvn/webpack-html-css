import { cloudinaryConfig } from './../config/index'
import { Request, Response } from 'express';
import { UploadApiResponse, v2 as cloudinary,ResourceApiResponse } from 'cloudinary'

cloudinary.config(cloudinaryConfig)
export const cloudinaryUploadSingle = async (req: Request, res: Response) => {
  const { file } = req;
  cloudinary.uploader.upload(file?.path as string, (error: Error, result: UploadApiResponse) => {
    if (error) {
      return res.status(500).json({
        code: 500,
        stack: error.stack,
        name: error.name,
        message: 'Error. File upload failed. Details: ' + error.message
      })
    }
    if (result) {
      return res.status(201).json({
        code: 201,
        message: 'File uploaded',
        data: {
          result
        }
      })
    }
  })
}

export const cloudinaryGetAllResources = (req: Request,res: Response) => {
  return cloudinary.api.resources({
    type:req.params.type
  },(error : Error,result: ResourceApiResponse ) => {
    if (error) {
      return res.status(500).json({
        code: 500,
        stack: error.stack,
        name: error.name,
        message: 'Error. Details: ' + error.message
      })
    }
    if (result) {
      return res.status(200).json({
        code: 200,
        message: 'Get all assets success',
        data: {
          ...result
        }
      })
    }
  })
}

export const cloudinaryGetResourceByName = (req: Request,res: Response) => {
  const {name} =req.params
  return cloudinary.api.resource(
    name as string
  ,(error : Error,result: ResourceApiResponse ) => {
    if (error) {
      return res.status(500).json({
        code: 500,
        stack: error.stack,
        name: error.name,
        message: 'Error. Details: ' + error.message
      })
    }
    if (result) {
      return res.status(200).json({
        code: 200,
        message: 'Get '+ name + ' success',
        data: {
          ...result
        }
      })
    }
  })
}