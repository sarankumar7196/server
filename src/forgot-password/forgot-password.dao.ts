import User from "../user/user.model";
import bcrypt from 'bcrypt';

export default class ForgotPasswordDao {

    static async checkEmailDAO(emailId: string) {
        try {
            let message = '';
            const isEmailExists = await User.find({
                email: emailId
            });
            if (isEmailExists.length > 0) {
                message = 'Verification link has been sent to the registered email id'
            } else {
                message = 'Email not exists'
            }
            return { isSuccess: true, message: message };
        } catch (err) {
            console.log("err", err)
            return { "isSuccess": false, "message": err.message };
        }
    }

    static async updateUserPassword(configDetails: any) {
        try {
            const filter = { email: configDetails.emailId };
            const userPassword = { password: ForgotPasswordDao.encryptPassword(configDetails.password) }
            const UserResult = await User.findOneAndUpdate(filter, userPassword, {
                new: true,
            });
            return { isSuccess: true, data: UserResult };
        } catch (err) {
            console.log("err", err)
            return { "isSuccess": false, "message": err.message };
        }
    }

    static encryptPassword(password: String): String {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }
}