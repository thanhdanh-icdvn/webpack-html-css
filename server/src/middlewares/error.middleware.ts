import { IError } from './../interfaces/error.interface';
import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';

export const errorMiddleware404 = (req:Request, res:Response, next:NextFunction)=>{
  next(createHttpError(404));
};

export const errorMiddlewareServer = (err:IError, req:Request, res:Response, next:NextFunction)=> {
  res.status(err.status || 500).json(err);
  next();
};