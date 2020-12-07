import UserDAO from "./user.dao";
import Profile from "../profile/profile.model";
import AccountService from "../account/account.service"

export default class UserService {

    static async saveUserService(data: any) {

        let query = { isAdmin: false };

        if (data.checKbox.isAdmin){
            query.isAdmin = true;
        }

        let profileResult = await Profile.findOne(query);
        data.user.profile = profileResult._id;

        const userResult: any = await UserDAO.saveUserDAO(data.user);

        if (!userResult.isSuccess || !userResult.data) {
            return userResult;
        }

        if (data.checKbox.isAdmin) {
    
            const accountDetails = data.accountDetails;

            accountDetails['user'] = userResult.data._id;
            accountDetails['createdBy'] = userResult.data._id;
            accountDetails['lastModifiedBy'] = userResult.data._id;

            const accountResult: any = await new AccountService().saveAccountService(accountDetails,data.contactDetails);
           console.log("sssss",accountResult)

            if (!accountResult.isSuccess || !accountResult.data) {
             return accountResult;
            }

            return accountResult;
        }


        return userResult;
    }
    
}