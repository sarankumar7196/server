import UserDAO from "./user.dao";

export default class UserService {
    static async saveUserService(data: any) {
        let returnData = await UserDAO.saveUserDAO(data);
        return returnData;
    }
}