import UserDAO from "./user.dao";
import Profile from "../profile/profile.model";
import AccountService from "../account/account.service"
import ContactDao from "../contact/contact.dao"
import { Result } from '../dto/app.dto'; // import result interface

export default class UserService {

    public async saveUserService(data: any): Promise<Result> {

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

            const accountResult: any = await new AccountService().saveAccountService(accountDetails);

            if (!accountResult.isSuccess || !accountResult.data) {
             return accountResult;
            }

            data.contactDetails['account'] = accountResult.data._id;
            data.contactDetails['createdBy'] = userResult.data._id;
            data.contactDetails['lastModifiedBy'] = userResult.data._id;

            const contactResult: any = await ContactDao.saveContact(data.contactDetails);

            if(!contactResult.isSuccess || !contactResult.data) {
                return contactResult;
            }

            return accountResult;
        }


        return userResult;
    }
    
}