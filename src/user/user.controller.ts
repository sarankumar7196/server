import { Request, Response, NextFunction } from "express";
import UserService from "./user.service";

export default class UserController {
    public static async saveUserController(req: Request, res: Response) {
        const data:any = req.body.user;
        res.json(await UserService.saveUserService(data));
    }
}