import { Request, Response, NextFunction } from "express";
import CommonEmailService from "../common/email";

export default class CommonController {
 
  public static async sendMailToUser(Id: any,subjectMessage: any, contentMessage: any) {
    //const query = { _id : Id };
    try {
      //let result = await userDao.findUser(Id);
      let emailData = {
        fromAddress: "adminuser@vidhyaan.com",
        toAddress: 'ranjithraja2696@gmail.com',
        subject: subjectMessage,
        encoding: "UTF-8",
        mailFormat: "html",
        askReceipt: "no",
        content: contentMessage,
      };
      let emailResult = CommonEmailService.sendEmail(emailData);
      return { isSuccess: true, message: "Email sent successfully!" };
    } catch (error) {
      return { isSuccess: false, message: "failed to send mail!" };
    }
  }
}
