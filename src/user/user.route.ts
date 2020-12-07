
import { Router, Request, Response, NextFunction } from 'express';
import UserController from "./user.controller";
import { userValidateRules } from './user.validator'; // import validation and sanitizer rule for Application routes
import { commonValidate } from '../common/common.validator'; // import validate method to validate the request
class UserRoutes {
    
    public userRouteSetup(router: Router): Router {
        
        //router.post("/", userValidateRules('userActionRule'), commonValidate, UserController.saveUserController);
        router.post("/", UserController.saveUserController);

        return router;
    }
}
export default new UserRoutes();
