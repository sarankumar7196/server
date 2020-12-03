import { Router } from "express";
import UserController from "./user.controller";

export default class UserRoute {
    constructor() { }
    public static UserRouteSetup(): Router {
        const router = Router();
        router.post("/", UserController.saveUserController);
        return router;
    }
}