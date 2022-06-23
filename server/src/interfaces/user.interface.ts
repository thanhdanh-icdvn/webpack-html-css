import { Request } from 'express';
import { Document } from 'mongoose';
export interface IUser extends Document{
  id:string;
  username:string;
  firstName:string;
  lastName:string;
  dob:Date;
  email:string;
  avatar?:string;
  isActive?:boolean;
  bio?:string;
  password:string;
  token:string;
}

export interface IGetUserReq extends Request<{id:IUser['id']}>{}
export interface IAddUserReq extends Request<{}> { }
export interface IUpdateUserReq extends Request<{ id: IUser['id'] }, any, IUser> { }
export interface IDeleteUserReq extends Request<{ id: IUser['id'] }> { }
export interface ILoginUserReq extends Request<{}> { }