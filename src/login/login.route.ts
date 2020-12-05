import { Router, Request, Response, NextFunction} from 'express';
import LoginCtrl from './login.controller';
import jwt from 'jsonwebtoken';

class AuthenticateRoutes {
    private loginCtrl: LoginCtrl;

    constructor() {
        this.loginCtrl = new LoginCtrl();
    }

    public authenticate(req: Request, res: Response, next: NextFunction) {
        const bearerToken: string = req.headers['authorization'];
        if(bearerToken != undefined) {
            jwt.verify(bearerToken, process.env.SECRET_KEY, (err: any, authData: any) => {
                if(err) {
                    res.json({ "success" : false, "message" : "Invalid Token" });
                } else {
                    res.json({ "success" : true, "message" : "Token is valid" });
                }
            });
            next();
        } else {
            res.sendStatus(404);
        }
    }

    public authRouteSetup(router: Router): Router {
        
        let loginController: LoginCtrl = new AuthenticateRoutes().loginCtrl;

        router.post('/signin', loginController.signIn);

        router.get('/authenticate', loginController.authenticate);

        return router;
    }
}
export default new AuthenticateRoutes();