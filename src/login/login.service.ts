import jwt from 'jsonwebtoken';
import UserInterface from "../user/user.interface";

import User from '../user/user.dao';

export default class LoginService {

    public async callSignIn(userInfo: UserInterface) {
        const userResponse: any = await User.findUserToLogin({  email : userInfo.email, "isActive": true });
       
        if(userResponse.data) {
            const isPasswordValid: Boolean =  User.decryptPassword( userInfo.password || '', userResponse.data.password);
            const userDetail =  userResponse.data;

            const us = await User.findUser({ email: userDetail.email });
            if(isPasswordValid) {
                // if(!userResponse.data.isPasswordVerified){
                //     delete userResponse.data.password;
                //     return { "isSuccess": false, "message" : "Please Reset Your Password","data" : userResponse.data };
                // } 
                return { "isSuccess": true, "data" : us.data };
            } else {
                return { "isSuccess": false, "message" : "Password is incorrect" };
            }
       
         
        } else {
            return { "isSuccess": false, "message": "No User found"};
        }
    }
    
    public generateJwt(userInfo: UserInterface): string {
        delete userInfo.password;
        
        const jsonWebToken: string = jwt.sign({
            user : userInfo
        }, process.env.SECRET_KEY, { expiresIn : '1d'});
    
        return jsonWebToken;
    }   
}