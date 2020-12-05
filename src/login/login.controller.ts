import { Request,  Response, NextFunction } from 'express';
import LoginService from './login.service';
import jwt from 'jsonwebtoken';

export default class LoginCtrl {
    private loginService: LoginService;

    constructor() {
        this.loginService = new LoginService();
    }

    public async signIn (req: Request, res: Response,  next: NextFunction) {
        const service = new LoginCtrl().loginService;
        
        const response: any = await service.callSignIn(req.body);

        if(response.isSuccess) {
            res.json({ "isSuccess" : true, "data": service.generateJwt(response.data) });
        } else {
            res.json(response);
        }
    }     
    
    public async authenticate(req: Request, res: Response, next: NextFunction) {
        const bearerToken: string = req.headers['authorization'];
        jwt.verify(bearerToken, process.env.SECRET_KEY, (err: any, authData: any) => {
            if(err) {
                res.json({ "success" : false, "message" : "Invalid Token" });
            } else {
                res.json({ "success" : true, "message" : "Token is valid" });
            }
        });
    }
}
