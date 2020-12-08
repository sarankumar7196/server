import { Router, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default class Configuration {
    static async authorize(req: Request, res: Response, next: NextFunction) {
        const token: string = req.headers['authorization'];
        if (token != undefined) {
            jwt.verify(token, process.env.SECRET_KEY, async (err: any, authData: any) => {
                if (err) {
                    res.json({ "success": false, "message": "unauthorised user" });
                } else {
                    req["user"] = authData.user;
                    next();
                }
            });
        } else {
            res.json({ "success": false, "message": "Auth token is not available" });
        }
    }
}