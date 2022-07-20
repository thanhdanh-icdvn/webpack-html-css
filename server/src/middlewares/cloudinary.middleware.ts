import { cloudinaryConfig } from './../config/index'
import { Request, Response } from 'express';
import { UploadApiResponse, v2 as cloudinary, ResourceApiResponse, UploadApiErrorResponse } from 'cloudinary'

cloudinary.config(cloudinaryConfig)
export const cloudinaryUploadSingle = async (req: Request, res: Response) => {
  const { file } = req;
  cloudinary.uploader.upload(file?.path as string, (error: UploadApiErrorResponse | undefined , result: UploadApiResponse | undefined) => {
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

export const cloudinaryGetAllResources = (req: Request, res: Response) => {
  return cloudinary.api.resources({
    type: req.params.type
  }, (error: UploadApiErrorResponse | undefined, result: ResourceApiResponse | undefined) => {
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

export const cloudinaryGetResourceByName = (req: Request, res: Response) => {
  const { public_id } = req.params
  return cloudinary.api.resource(
    public_id as string
    , (error: UploadApiErrorResponse | undefined, result: ResourceApiResponse | undefined) => {
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
          message: 'Get ' + public_id + ' success',
          data: {
            ...result
          }
        })
      }
    })
}