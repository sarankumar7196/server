import User from "./user.model";
import UserInterface from "./user.interface";
import bcrypt from 'bcrypt';

export default class UserDAO {
    static async saveUserDAO(data: any) {
        try {
            const userResult = await User.create(data);

            return { "isSuccess": true, "message": userResult };
        } catch (err) {
            console.log("err",err)
            return { "isSuccess": false, "message": err.message };
        }
    }
   
    static async findUser (query: any) {
        try {
            const result: UserInterface = await User.findOne(query).select('-password').populate('profile', 'name').populate('organization', 'name').populate('role');
            return { "isSuccess": true, "data": result };
        } catch(err) {
            return { "isSuccess": false, "message": err.message };
        }   
    }

    static async findUserToLogin (query: any) {
        try {
        //    const result: IUser = await User.findOne(query).populate('profile', 'name username').populate('organization', 'name namespace');
            const result: UserInterface = await User.findOne(query).select('+password');
            return { "isSuccess": true, "data": result };
        } catch(err) {
            return { "isSuccess": false, "message": err.message };
        }   
    }

    static async findUserList (query: any) {
        try {
            const result: UserInterface[] = await User.find(query).select('-password');
            return{ "isSuccess": true, "data": result };
        } catch(err) {
            return{ "isSuccess": true, "message": err.message };
        }
    } 

    

    static encryptPassword (password: String): String {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    static decryptPassword (password: String, hash: string): Boolean {
        return bcrypt.compareSync(password, hash);
    }
}