import { Result, EmailMessage } from "../dto/common.dto"; // Interface for result

import axios from "axios"; // Import axios library
import fs from "fs"; // Import file library
import path from "path"; // Import path library

class CommonService {
  private expiryTime: number = Date.now(); // holds the date time in milli seconds
  private access_token: any = process.env.ACCESS_TOKEN; // holds the access token

  //private emailMessage: EmailMessage; // holds the sender email ids
  //private token: string; // holds the record id

  public verificationCode: string = ""; // holds the random digit number
  public username: string = ""; // holds the username
  public browserName: string = ""; // holds the browser name
  public other: any = null; // holds other detail information

  // constructor(emailMessage: EmailMessage, token: string) {
  //   this.emailMessage = emailMessage; // set the email id
  //   this.token = token; // set the record id
  // }


  /**
   * method: Method to get access token from refresh token
  */
  private async getAccessToken(): Promise<any> {
    try {
      
      const res = await axios({
        url:
        "https://accounts.zoho.com/oauth/v2/token?refresh_token=" +
          process.env.REFRESH_TOKEN +
          "&grant_type=" +
          process.env.GRANT_TYPE +
          "&client_id=" +
          process.env.CLNT_ID +
          "&client_secret=" +
          process.env.CLIENT_SECRET_TOKEN +
          "&redirect_uri=" +
          process.env.REDIRECT_URI +
          "&scope=" +
          process.env.SCOPE,
        method: "POST",
        data: {},
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      //console.log('res -->',res);
      return res;
    } catch (err) {
      //console.log('err message -->', err);
      return err;
    }
  }

  /**
   * method: Method to send email
   * arg1: email data
  */
  public async sendEmail(data: EmailMessage): Promise<any> {
    
    if (this.access_token == "" || Date.now() < this.expiryTime) {
      const response: any = await this.getAccessToken();
      if (response.data) {
        this.access_token = process.env.ACCESS_TOKEN;
        console.log('access token -->',this.access_token);
        this.expiryTime = this.expiryTime + response.data.expires_in - 60;
      }
    }
    try {
      //this.getMailOptions(fileName); // calls the mail options
      console.log('process env account id --> ', this.access_token);
      console.log('Access token --->',process.env.ACCESS_TOKEN);
      const res = await axios({
        url:
          "https://mail.zoho.com/api/accounts/" +
          process.env.ACCOUNT_ID +
          "/messages",
        method: "POST",
        data: data,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Zoho-oauthtoken " + process.env.ACCESS_TOKEN
        }
      }).then(response => { 
        console.log('1 response -->',response);
      })
      .catch(error => {
        console.log('2 response -->',error.response)
      });;
      return res;
    } catch (err) {
      //console.log('err message -->', err);
      return err;
    }
  }

  /**
   * Method to get the subject based on the language
   * arg1: subject key
   * arg2: locale code
  */
  public setSubjectBasedOnLanguage(subjectKey: string, code: string): string {
    // fetch the email json content
    const emailConfig: string = JSON.parse( fs.readFileSync( path.join(__dirname, "../../langConfig/template", "email.json"), "utf-8" ) );

    // check the subject exists
    if(!emailConfig["subject"]) {
      return '';
    }

    // set subject based on language
    return emailConfig["subject"][subjectKey] ? emailConfig["subject"][subjectKey][code] : '';
  }

  /**
   * method: Method to get the mail Options
   * arg1: specifies the email body type as text or html
   * arg2: specifies the filename
   * return: nodemailer options
   */
  public getMailContent(fileName: string, data: EmailMessage, config: any): Result {
    try {
      // check the email body is html
      if (data.mailFormat == "html") {
        let htmlFile = fs.readFileSync( path.join(__dirname, `../../langConfig/template/${fileName}`), "utf8"); // read the html file

        switch(config.cType.toLowerCase()) {
          case 'platformregister':
            htmlFile = htmlFile.replace( /register_email/g, data.toAddress ); // find and replace the email id
            htmlFile = htmlFile.replace(/register_username/g, config.username); // find and replace the username
            htmlFile = htmlFile.replace(/register_id/g, config.token); // find and replace the recordId

            break;

          case 'passwordverification':
            htmlFile = htmlFile.replace( /user_email/g, data.toAddress ); // find and replace the email id
            htmlFile = htmlFile.replace(/user_name/g, config.username ); // find and replace the username
            htmlFile = htmlFile.replace(/config_browser/g, config.browserName ); // find and replace the browser name
            htmlFile = htmlFile.replace( /verification_code/g, config.verificationCode); // find and replace the verification code

            break;

          case 'passwordreset':
            htmlFile = htmlFile.replace(/user_username/g, config.username); // find and replace the username
            htmlFile = htmlFile.replace(/user_token/g, config.token); // find and replace the recordId

            break;

          case 'emailchange':
            htmlFile = htmlFile.replace(/user_name/g, config.username); //set the user name
            htmlFile = htmlFile.replace(/user_old_email/g, config.oldEmail); //set the old email
            htmlFile = htmlFile.replace(/user_new_email/g, config.newEmail); // set the new email
            htmlFile = htmlFile.replace(/oid_token/g, config.token); //set the token

            break;
          
          case 'request':
          case 'invite':
            htmlFile = htmlFile.replace(/user_email/g, data.toAddress); //set the user email id
            htmlFile = htmlFile.replace(/org_name/g, config.orgName); //set the old email
            htmlFile = htmlFile.replace(/profile_name/g, config.profileName); // set the new email
            htmlFile = htmlFile.replace(/inv_id/g, config.token); //set the token

            break;
        }
        data.content = htmlFile; //set the html file
      }

      return { "isSuccess": true, "data": data };
    } catch (err) {
      return { "isSuccess": false, "message": err.message };
    }
  }

}

export default new CommonService();