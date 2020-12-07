import ForgotPasswordDAO from "./forgot-password.dao";

export default class ForgotPasswordService {

    static async checkEmailService(emailId: string) {
        let returnData = await ForgotPasswordDAO.checkEmailDAO(emailId);
        return returnData;
    }

    static async changePasswordService(data: any) {
        let returnData = await ForgotPasswordDAO.updateUserPassword(data);
        return returnData;
    }
}