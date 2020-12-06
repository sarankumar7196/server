import UserDAO from "./user.dao";
import Profile from "../profile/profile.model";

export default class UserService {

    static async saveUserService(data: any) {

        let query = { isAdmin: false };

        if (data.checKbox.isAdmin){
            query.isAdmin = true;
        }

        let profileResult = await Profile.findOne(query);
        data.user.profile = profileResult._id;

        let returnData = await UserDAO.saveUserDAO(data.user);

        return returnData;
    }
    
}