// import { Request, Response, NextFunction } from "express";
// import UserService from "./user.service";

// export default class UserController {
//     public static async saveUserController(req: Request, res: Response) {
//         const data: any = req.body;
//         console.log("data",data)
//         res.json(await UserService.saveUserService(data));
//     }
// }

import { Request,  Response, NextFunction } from 'express';
import UserService from './user.service';

export default class UserController {
 
    public static async saveUserController(req: Request, res: Response, next: NextFunction) {
        
        const response: any = await UserService.saveUserService(req.body);
        if(response.isSuccess) {
            res.json(response);
        } else {
            res.json(response);
        }
    } 
}
