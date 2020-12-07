
import { Router } from 'express';
import UserController from "./user.controller";
class UserRoutes {
    
    public userRouteSetup(router: Router): Router {
        
        //router.post("/", userValidateRules('userActionRule'), commonValidate, UserController.saveUserController);
        router.post("/", UserController.saveUserController);

        return router;
    }
}
export default new UserRoutes();
