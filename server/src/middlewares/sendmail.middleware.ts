import { NextFunction, Request, Response } from 'express';
import { createTransport } from 'nodemailer';

import { MailHostSMTP, MailPortSMTP } from './../enums/mail-host.enum';
import { IMailOptions } from '../interfaces/mail-option.interface';
import { MAIL_PASSWORD, MAIL_USERNAME } from '../config';

const MAIL_OPTIONS:IMailOptions = {
  host:MailHostSMTP.GMAIL,
  port:MailPortSMTP.SSL,
  secure:true,
  auth:{
    user: MAIL_USERNAME as string,
    pass:MAIL_PASSWORD as string
  }
};
export const sendMail = (req:Request,res:Response,next:NextFunction)=>{
  const transporter = createTransport(MAIL_OPTIONS);
};