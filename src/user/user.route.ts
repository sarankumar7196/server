
import { Router, Request, Response, NextFunction } from 'express';
import UserController from "./user.controller";

class UserRoutes {
    
    public userRouteSetup(router: Router): Router {
        
        router.post("/", UserController.saveUserController);

        return router;
    }
}
export default new UserRoutes();
