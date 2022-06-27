import { Request, Response } from 'express';
import { createTransport } from 'nodemailer';
import fs from 'fs';
import ejs from 'ejs';
import juice from 'juice';

import { MailHostSMTP, MailPortSMTP } from '../enums/mail-host.enum'
import { IMailOptions } from '../interfaces/mail-option.interface';
import { MAIL_PASSWORD, MAIL_USERNAME } from '../config';
import path from 'path';
import { log } from '../server';

const MAIL_OPTIONS:IMailOptions = {

  host:MailHostSMTP.GMAIL,
  port:MailPortSMTP.SSL,
  secure:true,
  auth:{
    user: MAIL_USERNAME as string,
    pass:MAIL_PASSWORD as string
  }
};
export const sendMail = async (req:Request,res:Response)=>{
  const transporter = createTransport(MAIL_OPTIONS);
  const templatePath = path.join(__dirname,'..','templates/mail-template.html');
  const {to,subject,cc} = req.body;
  if(fs.existsSync(templatePath)){
   try {
    const template = fs.readFileSync(templatePath,'utf-8');
    const html = ejs.render(template);
    const htmlWithStylesInlined = juice(html);

    const mailSenderInfo = await transporter.sendMail({
      from:MAIL_USERNAME,
      to:to,
      subject:subject,
      html:htmlWithStylesInlined,
      cc:cc || null
    });
    return res.status(200).json({
      code: 200,
      data:mailSenderInfo
    });
   } catch (error) {
    log.error('Send mail error. '+error);
    return res.status(500).json({
      code:500,
      message:'Send mail error. '+error
    });
   }
  }else{
    return res.status(500).json({
      code:500,
      message:'Mail path: '+ templatePath + ' does not exist'
    });
  }
};