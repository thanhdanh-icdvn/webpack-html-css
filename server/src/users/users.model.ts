import { Request } from 'express';
export interface IUser{
  id:string;
  username:string;
  firstName:string;
  lastName:string;
  dob:Date;
  email:string;
  avatar?:string;
  isActive?:boolean;
  bio?:string;
  hashedPassword:string;
}

export interface IGetUserReq extends Request<{id:IUser['id']}>{}
export interface IAddUserReq extends Request { }
export interface IUpdateUserReq extends Request<{ id: IUser['id'] }, any, IUser> { }
export interface IDeleteUserReq extends Request<{ id: IUser['id'] }> { }
export interface ILoginUserReq extends Request { }