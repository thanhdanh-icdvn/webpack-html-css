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
  provider:string;
  subject:string;
}

export type IGetUserReq = Request<{id:IUser['id']}>
export type IAddUserReq = Request<Record<string,unknown>>
export type IUpdateUserReq = Request<{ id: IUser['id'] }, Record<string,unknown>, IUser>
export type IDeleteUserReq = Request<{ id: IUser['id'] }>
export type ILoginUserReq = Request<Record<string,unknown>>