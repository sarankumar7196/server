import User from "./user.model";
import UserInterface from "./user.interface";

export default class UserDAO {
    static async saveUserDAO(data: any) {
        try {
            const userResult = await User.create(data);
            return { "isSuccess": true, "message": userResult };
        } catch(err) {
            return { "isSuccess": false, "message": err.message };
        }
    }
}