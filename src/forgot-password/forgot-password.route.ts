
import { Router, Request, Response, NextFunction } from 'express';
import ForgotPasswordController from "./forgot-password.controller";
import { commonValidate } from '../common/common.validator'; // import validate method to validate the request

class ForgotPasswordRoutes {
    
    public forgotPasswordRouteSetup(router: Router): Router {
        
        router.get("/:emailId", ForgotPasswordController.checkEmailController);

        router.post("/change-passowrd", ForgotPasswordController.updateUserPasswordController);

        return router;
    }
}
export default new ForgotPasswordRoutes();
